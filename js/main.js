const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }

}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";

        }

    });

}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }

});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (backToTop) {

        if (window.scrollY > 300) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}