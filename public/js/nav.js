// script.js

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const overlay = document.querySelector(".overlay");

// Mostrar menú y overlay
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    overlay.style.display = 'block';
});

// Ocultar menú y overlay
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    overlay.style.display = 'none';
});

// Ocultar menú y overlay si se hace clic en el overlay
overlay.addEventListener("click", () => {
    nav.classList.remove("visible");
    overlay.style.display = 'none';
});
