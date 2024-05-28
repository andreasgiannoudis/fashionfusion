/**
 * This script manages a popup that appears on the webpage to offer a discount code and a login redirect option.
 * It performs the following functions:
 * - Checks if a cookie named 'popupClosed' exists to determine if the popup should be shown.
 * - Displays the popup if the 'popupClosed' cookie is not set or is not 'true'.
 * - Allows the user to close the popup and sets the 'popupClosed' cookie to prevent the popup from showing again for 7 days.
 * - Provides a button to redirect the user to a login page.
 * - Displays a discount code when the user clicks the "show discount code" button.
 * - Manages cookies to store the popup's closed state.
 */

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

    //a function to set a cookie with a specified name, value, and expiration in days
    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 7 days duration
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    
    //a function to get the value of a cookie by name
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
        return null; //return null if the cookie is not found
    }
});
