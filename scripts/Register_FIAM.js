const registerForm = document.querySelector('#registerForm');
const nivelSelect = document.querySelector('#nivel');
const seccionContainer = document.querySelector('#seccionContainer');
const seccionSelect = document.querySelector('#seccion');

nivelSelect.addEventListener('change', () => {
    if (nivelSelect.value) {
        seccionContainer.classList.remove('hidden');
        seccionSelect.disabled = false;
    } else {
        seccionContainer.classList.add('hidden');
        seccionSelect.disabled = true;
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();
    const email = document.querySelector('#email').value.trim();
    const cargo = document.querySelector('#cargo').value.trim();
    const asignaturas = document.querySelector('#asignaturas').value.trim();
    const nivel = nivelSelect.value.trim();
    const seccion = seccionSelect.value.trim();
    const rol = "FIAM";

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.some(user => user.email === email);

    if (isUserRegistered) {
        return alert('El usuario ya está registrado.');
    }

    Users.push({ nombre, contraseña, email, cargo, asignaturas, nivel, seccion, rol });
    localStorage.setItem('users', JSON.stringify(Users));
    alert("Registro exitoso.");

    window.location.href = "../html/Entrada_FIAM.html";
});
