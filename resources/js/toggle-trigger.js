/**
 * This script enhances a webpage with expandable/collapsible paragraphs under <h3> headers.
 * It checks if the URL contains the word "hallbarhet", and if so:
 * - Finds all <h3> elements.
 * - Appends a downward arrow (▼) to each <h3>.
 * - Hides the next <p> sibling element of each <h3>.
 * - Adds click event listeners to toggle the display of the next <p> sibling element when the <h3> is clicked.
 * - The arrow rotates to indicate the toggle state (expanded/collapsed).
 */

document.addEventListener("DOMContentLoaded", function() {
    //checking if the current url contains the word "hallbarhet"
    //so the code only runs on this page
    if (window.location.href.includes("hallbarhet")) {
        const headers = document.querySelectorAll("h3");

        //iterate over each <h3> element the page has
        headers.forEach(header => {
            const arrow = document.createElement("p");
            arrow.classList.add("arrow");
            arrow.textContent = "▼";

            header.appendChild(arrow);

            header.classList.add("toggle-header");

            header.addEventListener("click", function() {
                const paragraph = header.nextElementSibling;

                if (paragraph && paragraph.tagName.toLowerCase() === "p") {
                    if (paragraph.style.display === "none" || !paragraph.style.display) {
                        paragraph.style.display = "block";
                        arrow.classList.add("rotate");
                    } else {
                        paragraph.style.display = "none";
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
