document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#register-form");
  const errorMessage = document.querySelector("#error-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    // realizar las validaciones
    if (username.trim() === "" || password.trim() === "") {
      errorMessage.textContent = "Por favor ingrese el usuario y el password";
      return;
    }

    // simulacion de bd: guardar en el localstorage

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      errorMessage.textContent = "Usario ya existe, prueba con otro";
      return;
    }

    const userNew = {
      username,
      password,
    };

    users.push(userNew);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "login.html";
  });
});
