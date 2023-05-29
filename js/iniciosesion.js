const auth = firebase.auth();

const formularioInicioSesion = document.getElementById("inicio-sesion");
const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");

function iniciarSesion(correo, contrasena) {
  auth
    .signInWithEmailAndPassword(correo, contrasena)
    .then((userCredential) => {
      window.location.href = "./citasregistradas.html";
    })
    .catch((error) => {
      alert("Error al iniciar sesión: " + error.message);
    });
}

formularioInicioSesion.addEventListener("submit", (event) => {
  event.preventDefault();

  const correo = inputUsuario.value;
  const contrasena = inputContrasena.value;

  iniciarSesion(correo, contrasena);
});