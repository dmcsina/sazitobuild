document.addEventListener("DOMContentLoaded", () => {

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

        window.addEventListener("scroll", () => {

            if (window.scrollY > 200) {

                backToTop.style.opacity = "1";
                backToTop.style.visibility = "visible";

            } else {

                backToTop.style.opacity = "0.8";
                backToTop.style.visibility = "visible";

            }

        });

    }

});