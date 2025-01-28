const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.nombre === nombre && user.contraseña === contraseña && user.rol === "FIAM");

    if (!validUser) {
        return alert('Usuario o contraseña incorrectos, o no tiene permisos para FIAM!');
    }

    alert(`Bienvenido FIAM ${validUser.nombre}`);
    window.location.href = "Entrada_FIAM.html";
});