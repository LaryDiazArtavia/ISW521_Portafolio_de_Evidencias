const themeButton = document.querySelector(".theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("taskuni-theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeButton.textContent = "Modo claro";
    themeButton.setAttribute("aria-label", "Cambiar a modo claro");
}

themeButton.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    const darkModeIsActive = body.classList.contains("dark-theme");

    if (darkModeIsActive) {
        localStorage.setItem("taskuni-theme", "dark");
        themeButton.textContent = "Modo claro";
        themeButton.setAttribute("aria-label", "Cambiar a modo claro");
    } else {
        localStorage.setItem("taskuni-theme", "light");
        themeButton.textContent = "Modo oscuro";
        themeButton.setAttribute("aria-label", "Cambiar a modo oscuro");
    }
});