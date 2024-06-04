// acá la lógica para tomar los datos del form, validarlos, luego buscar los
// usuarios en el localstorage y comprobar el username y password ingresados
// si los datos coindicen se redirige al index pero antes setear el valor de
// userActive a true en el localstorage

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#login-form");
    const errorMessage = document.querySelector("#error-message");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("form submitted");  // Para verificar si el evento se dispara

        const username = form.username.value;
        const password = form.password.value;

        // Validación de campos vacíos
        if (username.trim() === "" || password.trim() === "") {
            errorMessage.textContent = "Por favor ingrese el usuario y el password";
            return;
        }

        // Simulación de bd: guardar en el localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((user) => user.username === username && user.password === password);

        if (existingUser) {
            localStorage.setItem('userActive', JSON.stringify(true));
            window.location.href = './seleccion.html'; 
        } else {
            errorMessage.textContent = "Usuario o contraseña incorrectos";
        }
    });
});



