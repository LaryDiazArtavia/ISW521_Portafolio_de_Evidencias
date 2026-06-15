//Selecciona el botón que cambia entre el modo claro y oscuro.
const themeButton = document.querySelector(".theme-toggle");
//Guarda una referencia al body para poder agregar o quitar la clase del modo oscuro.
const body = document.body;

//Recupera del navegador la preferencia de tema guardada anteriormente.
const savedTheme = localStorage.getItem("taskuni-theme");

//Si el usuario ya había elegido el modo oscuro, se aplica al cargar la página.
if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeButton.textContent = "Modo claro";
    themeButton.setAttribute("aria-label", "Cambiar a modo claro");
}

//Evento que se ejecuta cuando el usuario presiona el botón de modo claro/oscuro.
themeButton.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    const darkModeIsActive = body.classList.contains("dark-theme");

    //Guarda la preferencia del usuario en localStorage.
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

//Selecciona el formulario de contacto.
const contactForm = document.querySelector(".contact-form");

    //Evita que el formulario envié los datos por la URL
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Gracias por su interés en TaskUni. Pronto recibirá más información.");

        contactForm.reset();
    });