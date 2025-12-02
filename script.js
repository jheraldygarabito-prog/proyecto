// Evento del botón principal
document.getElementById("btnHero").addEventListener("click", () => {
    alert("¡Diste clic en el botón principal!");
});

// Eventos de los botones de las tarjetas
const serviceButtons = document.querySelectorAll(".btnService");

serviceButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        alert(`Hiciste clic en el Servicio ${index + 1}`);
    });
});
