const form = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");
const errorConfirm = document.getElementById("errorConfirm");
const errorEdad = document.getElementById("errorEdad");

const btnEnviar = document.getElementById("btnEnviar");
const mensajeExito = document.getElementById("mensajeExito");

// Regex correo
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Contraseña: al menos un número y un carácter especial
const regexNumero = /[0-9]/;
const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;

function setValido(input, errorEl) {
  input.classList.remove("invalido");
  input.classList.add("valido");
  errorEl.textContent = "";
}

function setInvalido(input, errorEl, mensaje) {
  input.classList.remove("valido");
  input.classList.add("invalido");
  errorEl.textContent = mensaje;
}

function validarNombre() {
  const v = nombre.value.trim();
  if (v.length < 3) {
    setInvalido(nombre, errorNombre, "Mínimo 3 caracteres.");
    return false;
  }
  setValido(nombre, errorNombre);
  return true;
}

function validarCorreo() {
  const v = correo.value.trim();
  if (!regexCorreo.test(v)) {
    setInvalido(correo, errorCorreo, "Correo inválido.");
    return false;
  }
  setValido(correo, errorCorreo);
  return true;
}

function validarPassword() {
  const v = password.value;

  if (v.length < 8) {
    setInvalido(password, errorPassword, "La contraseña debe incluir 8 caracteres.");
    return false;
  }
  if (!regexNumero.test(v)) {
    setInvalido(password, errorPassword, "Debe incluir al menos un número.");
    return false;
  }
  if (!regexEspecial.test(v)) {
    setInvalido(password, errorPassword, "Debe incluir un carácter especial.");
    return false;
  }

  setValido(password, errorPassword);
  return true;
}

function validarConfirmPassword() {
  const v = confirmPassword.value;
  if (v !== password.value || v.length === 0) {
    setInvalido(confirmPassword, errorConfirm, "No coincide con la contraseña.");
    return false;
  }
  setValido(confirmPassword, errorConfirm);
  return true;
}

function validarEdad() {
  const v = parseInt(edad.value, 10);
  if (isNaN(v) || v < 18) {
    setInvalido(edad, errorEdad, "Debe ser mayor o igual a 18.");
    return false;
  }
  setValido(edad, errorEdad);
  return true;
}

function validarTodo() {
  const ok =
    validarNombre() &&
    validarCorreo() &&
    validarPassword() &&
    validarConfirmPassword() &&
    validarEdad();

  btnEnviar.disabled = !ok;
  return ok;
}

// Validaciones dinámicas (tiempo real)
nombre.addEventListener("input", () => {
  mensajeExito.textContent = "";
  validarTodo();
});

correo.addEventListener("input", () => {
  mensajeExito.textContent = "";
  validarTodo();
});

password.addEventListener("input", () => {
  mensajeExito.textContent = "";
  validarTodo();
});

confirmPassword.addEventListener("input", () => {
  mensajeExito.textContent = "";
  validarTodo();
});

edad.addEventListener("input", () => {
  mensajeExito.textContent = "";
  validarTodo();
});

// Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validarTodo()) {
    alert("Formulario validado correctamente.");
    mensajeExito.textContent = "Formulario validado correctamente.";
  }
});

// Reset
form.addEventListener("reset", () => {
  mensajeExito.textContent = "";
  btnEnviar.disabled = true;

  const inputs = [nombre, correo, password, confirmPassword, edad];
  inputs.forEach((inp) => inp.classList.remove("valido", "invalido"));

  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorPassword.textContent = "";
  errorConfirm.textContent = "";
  errorEdad.textContent = "";
});
