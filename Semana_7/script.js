// Arreglo de productos (requisito: renderizar desde JS)
const productos = [
  { nombre: "Laptop", precio: 1200, descripcion: "Equipo para trabajo y estudio." },
  { nombre: "Teléfono", precio: 800, descripcion: "Smartphone de gama media." },
  { nombre: "Tablet", precio: 600, descripcion: "Ideal para consumo de contenido." }
];

// DOM
const lista = document.getElementById("listaProductos");
const btnAgregar = document.getElementById("btnAgregar");

const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const inputDesc = document.getElementById("descripcion");

const errNombre = document.getElementById("errNombre");
const errPrecio = document.getElementById("errPrecio");
const errDesc = document.getElementById("errDesc");

// Plantilla básica (template literal) para un producto
function plantillaProducto(p) {
  return `
    <li>
      <strong>${p.nombre}</strong><br>
      Precio: $${p.precio}<br>
      ${p.descripcion}
    </li>
  `;
}

// Renderizado dinámico de la lista
function renderProductos() {
  lista.innerHTML = productos.map(plantillaProducto).join("");
}

// Validaciones (clase pasada)
function validarNombre() {
  const v = inputNombre.value.trim();
  if (v.length < 3) {
    errNombre.textContent = "Mínimo 3 caracteres.";
    return false;
  }
  errNombre.textContent = "";
  return true;
}

function validarPrecio() {
  const v = Number(inputPrecio.value);
  if (!inputPrecio.value || isNaN(v) || v <= 0) {
    errPrecio.textContent = "Precio debe ser mayor a 0.";
    return false;
  }
  errPrecio.textContent = "";
  return true;
}

function validarDesc() {
  const v = inputDesc.value.trim();
  if (v.length < 5) {
    errDesc.textContent = "Mínimo 5 caracteres.";
    return false;
  }
  errDesc.textContent = "";
  return true;
}

function validarFormulario() {
  const ok1 = validarNombre();
  const ok2 = validarPrecio();
  const ok3 = validarDesc();
  return ok1 && ok2 && ok3;
}

// Validación en tiempo real
inputNombre.addEventListener("input", validarNombre);
inputPrecio.addEventListener("input", validarPrecio);
inputDesc.addEventListener("input", validarDesc);

// Cargar lista al iniciar
document.addEventListener("DOMContentLoaded", renderProductos);

// Agregar producto al final (requisito) usando inputs validados
btnAgregar.addEventListener("click", () => {
  if (!validarFormulario()) return;

  const nuevo = {
    nombre: inputNombre.value.trim(),
    precio: Number(inputPrecio.value),
    descripcion: inputDesc.value.trim()
  };

  productos.push(nuevo);
  renderProductos();

  // Limpiar campos
  inputNombre.value = "";
  inputPrecio.value = "";
  inputDesc.value = "";
});
