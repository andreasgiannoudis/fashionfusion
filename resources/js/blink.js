
const badgeElements = document.querySelectorAll('.badge--bottom-left');

/*Funktion för att växla storlek*/
function toggleBadgeSize() {
  
  badgeElements.forEach(badgeElement => {
    badgeElement.classList.toggle('blink');
  });
}


setInterval(toggleBadgeSize, 1000);