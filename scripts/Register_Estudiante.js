const signupForm = document.querySelector('#registerForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const cedula = document.querySelector('#cedula').value.trim();
    const email = document.querySelector('#email').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();
    const pregunta1 = document.querySelector('#pregunta1').value;
    const pregunta2 = document.querySelector('#pregunta2').value;
    const seccion = document.querySelector('#seccion')?.value || '';
    const rol = "Estudiante";

    if (!nombre || !cedula || !email || !contraseña || !pregunta1 || !pregunta2) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.some(user => user.email === email || user.cedula === cedula);

    if (isUserRegistered) {
        alert('El usuario ya está registrado con este correo o cédula.');
        return;
    }

    Users.push({ nombre, cedula, email, contraseña, pregunta1, pregunta2, seccion, rol });
    localStorage.setItem('users', JSON.stringify(Users));

    alert("Registro Exitoso! :3");
    window.location.href = "Entrada_Estudiante.html";
});
