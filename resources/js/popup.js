document.addEventListener('DOMContentLoaded', function() {
    const popupContent = document.getElementById('popup-content');
    const closeButton = document.getElementById('close-button');
    const showDiscountCodeBtn = document.getElementById('show-discount-code');
    const showLoginBtn = document.getElementById('show-login');
    const discountCodeDisplay = document.getElementById('discount-code-display');

    let popupClosed = getCookie('popupClosed');
    if (!popupClosed || popupClosed !== 'true') {
        showPopup();
    }

    function showPopup() {
        popupContent.style.display = 'block';
    }

    function closePopup() {
        popupContent.style.display = 'none';
        setCookie('popupClosed', 'true', 7);
    }

    closeButton.addEventListener('click', closePopup);
    showLoginBtn.addEventListener('click', function() {
        closePopup();
        window.location.href = showLoginBtn.getAttribute("href"); //redirect the user to the login page
    });

    showDiscountCodeBtn.addEventListener('click', function() {
        getDiscountCodeManually().then(discountCode => {
            discountCodeDisplay.textContent = 'Your discount code is: ' + discountCode;
        }).catch(error => {
            console.error('Error:', error.message);
        });
    });

    const manuallySpecifiedDiscountCode = "firstorder";
    function getDiscountCodeManually() {
        return Promise.resolve(manuallySpecifiedDiscountCode.trim());
    }

    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 7 days duration
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    

    function getCookie(name) {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }
});
