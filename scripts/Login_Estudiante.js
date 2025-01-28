const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();

    if (nombre === "Oliver Gómez" && contraseña === "Oliver1234") {

        localStorage.setItem('currentUser', 'Oliver Gómez');

        const oliverNotas = {
            primerLapso: 15,
            segundoLapso: 18,
            tercerLapso: 16,
            notaDefinitiva: 17
        };
        localStorage.setItem('userNotas', JSON.stringify(oliverNotas));

        alert(`Bienvenido Estudiante ${nombre}`);
        return (window.location.href = "Entrada_Estudiante.html");
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(
        user => user.nombre === nombre && user.contraseña === contraseña && user.rol === "Estudiante"
    );

    if (!validUser) {
        return alert('Usuario o contraseña incorrectos para Estudiantes!');
    }

    localStorage.setItem('currentUser', validUser.nombre);

    alert(`Bienvenido Estudiante ${validUser.nombre}`);
    window.location.href = "../Entrada_Estudiante.html";
});
