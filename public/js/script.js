const navButton = document.getElementById("navButton");
const navBarResponsive = document.querySelector(".nav-responsive")

const responsiveBar = () => {
    if (navBarResponsive.classList.contains("active")) {
        navBarResponsive.classList.remove("active");
        navButton.classList.add("fa-bars");
        navButton.classList.remove("fa-xmark");
    } else {
        navBarResponsive.classList.add("active");
        navButton.classList.remove("fa-bars");
        navButton.classList.add("fa-xmark");
    }
}

navButton.addEventListener("click", responsiveBar);