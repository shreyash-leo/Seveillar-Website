// include.js - Universal Navbar Loader

document.addEventListener("DOMContentLoaded", function () {

    // Detect current page
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "" || currentPage === "index.html") {
        currentPage = "index";
    } else {
        currentPage = currentPage.replace(".html", "");
    }

    // Load navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {

            const navbar = document.getElementById("navbar");

            if (navbar) {

                navbar.innerHTML = data;

                // Set active menu item
                const menuItems = document.querySelectorAll("#menu_main .menu-item");

                menuItems.forEach(function (item) {

                    const pageAttr = item.getAttribute("data-page");

                    if (pageAttr === currentPage) {

                        item.classList.add(
                            "current-menu-item",
                            "current-menu-parent"
                        );

                    } else {

                        item.classList.remove(
                            "current-menu-item",
                            "current-menu-parent"
                        );

                    }

                });

            }

        })
        .catch(error => {
            console.error("Navbar loading error:", error);
        });

});