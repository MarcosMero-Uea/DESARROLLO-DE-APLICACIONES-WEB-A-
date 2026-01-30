// Botón de alerta
const btnAlerta = document.getElementById("btnAlerta");
btnAlerta.addEventListener("click", () => {
  alert("¡Hola! Esta es una alerta personalizada con JavaScript ✅");
});

// Validación del formulario
const form = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorMensaje = document.getElementById("errorMensaje");

function esCorreoValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

function mostrarError(elementoError, mostrar) {
  if (mostrar) elementoError.classList.remove("d-none");
  else elementoError.classList.add("d-none");
}

function validarCampoNombre() {
  const invalido = nombre.value.trim() === "";
  mostrarError(errorNombre, invalido);
  return !invalido;
}

function validarCampoCorreo() {
  const invalido = !esCorreoValido(correo.value.trim());
  mostrarError(errorCorreo, invalido);
  return !invalido;
}

function validarCampoMensaje() {
  const invalido = mensaje.value.trim() === "";
  mostrarError(errorMensaje, invalido);
  return !invalido;
}

// Validación dinámica (en tiempo real)
nombre.addEventListener("input", validarCampoNombre);
correo.addEventListener("input", validarCampoCorreo);
mensaje.addEventListener("input", validarCampoMensaje);

// Validación al enviar
form.addEventListener("submit", (e) => {
  const okNombre = validarCampoNombre();
  const okCorreo = validarCampoCorreo();
  const okMensaje = validarCampoMensaje();

  if (!(okNombre && okCorreo && okMensaje)) {
    e.preventDefault();
    return;
  }

  e.preventDefault();
  alert("Formulario enviado correctamente ✅");
  form.reset();

  // Ocultar errores tras reset
  mostrarError(errorNombre, false);
  mostrarError(errorCorreo, false);
  mostrarError(errorMensaje, false);
});
