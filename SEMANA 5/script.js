// Acceso al DOM
const inputUrl = document.getElementById("urlImagen");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const galeria = document.getElementById("galeria");
const mensaje = document.getElementById("mensaje");

let imagenSeleccionada = null;


// Evento click: agregar imagen
btnAgregar.addEventListener("click", () => {
  const url = inputUrl.value.trim();

  if (url === "") {
    alert("Ingrese una URL");
    return;
  }

  // Crear elemento img
  const img = document.createElement("img");
  img.src = url;

  // Evento click: seleccionar imagen (solo 1 a la vez)
  img.addEventListener("click", () => {
    if (imagenSeleccionada) {
      imagenSeleccionada.classList.remove("seleccionada");
    }
    img.classList.add("seleccionada");
    imagenSeleccionada = img;
  });

  // Agregar al DOM
  galeria.appendChild(img);

  // Limpiar input
  inputUrl.value = "";
  mensaje.innerText = "";
});

// Evento click: eliminar imagen seleccionada
btnEliminar.addEventListener("click", () => {
  if (imagenSeleccionada) {
    imagenSeleccionada.remove(); // elimina del DOM
    imagenSeleccionada = null;
  } else {
    alert("No hay imagen seleccionada");
  }
});

// Evento keydown: Enter para agregar
inputUrl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btnAgregar.click();
  }
});
