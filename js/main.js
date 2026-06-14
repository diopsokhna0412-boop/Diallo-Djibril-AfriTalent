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

const fadeSections = document.querySelectorAll(".fade-section");

const fadeObserver = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.2
}

);

fadeSections.forEach((section) => {

    fadeObserver.observe(section);

});

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const increment = target / 100;

            const updateCounter = () => {

                if(count < target){

                    count += increment;

                    counter.textContent = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},

{
    threshold:0.5
}

);

counters.forEach((counter) => {

    counterObserver.observe(counter);

});