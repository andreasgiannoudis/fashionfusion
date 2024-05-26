document.addEventListener("DOMContentLoaded", function() {
  const popupContent = document.getElementById("popup-content");
  const closeButton = document.getElementById("close-button");
  const showDiscountCodeBtn = document.getElementById("show-discount-code");
  const showLoginBtn = document.getElementById("show-login");
  const discountCodeDisplay = document.getElementById("discount-code-display");
  let popupClosed = getCookie("popupClosed");
  if (!popupClosed || popupClosed !== "true") {
    showPopup();
  }
  function showPopup() {
    popupContent.style.display = "block";
  }
  function closePopup() {
    popupContent.style.display = "none";
    setCookie("popupClosed", "true", 7);
  }
  closeButton.addEventListener("click", closePopup);
  showLoginBtn.addEventListener("click", function() {
    closePopup();
    window.location.href = showLoginBtn.getAttribute("href");
  });
  showDiscountCodeBtn.addEventListener("click", function() {
    getDiscountCodeManually().then((discountCode) => {
      discountCodeDisplay.textContent = "Your discount code is: " + discountCode;
    }).catch((error) => {
      console.error("Error:", error.message);
    });
  });
  const manuallySpecifiedDiscountCode = "firstorder";
  function getDiscountCodeManually() {
    return Promise.resolve(manuallySpecifiedDiscountCode.trim());
  }
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = /* @__PURE__ */ new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
});
const badgeElements = document.querySelectorAll(".badge--bottom-left");
function toggleBadgeSize() {
  badgeElements.forEach((badgeElement) => {
    badgeElement.classList.toggle("blink");
  });
}
setInterval(toggleBadgeSize, 1e3);
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.href.includes("hallbarhet")) {
    const headers = document.querySelectorAll("h3");
    headers.forEach((header) => {
      const arrow = document.createElement("p");
      arrow.classList.add("arrow");
      arrow.textContent = "▼";
      header.appendChild(arrow);
      header.classList.add("toggle-header");
      header.addEventListener("click", function() {
        const paragraph2 = header.nextElementSibling;
        if (paragraph2 && paragraph2.tagName.toLowerCase() === "p") {
          if (paragraph2.style.display === "none" || !paragraph2.style.display) {
            paragraph2.style.display = "block";
            arrow.classList.add("rotate");
          } else {
            paragraph2.style.display = "none";
            arrow.classList.remove("rotate");
          }
        }
      });
      const paragraph = header.nextElementSibling;
      if (paragraph && paragraph.tagName.toLowerCase() === "p") {
        paragraph.style.display = "none";
      }
    });
  }
});
