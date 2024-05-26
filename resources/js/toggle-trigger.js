document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes("hallbarhet")) {
        const headers = document.querySelectorAll("h3");

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
