document.getElementById("btnHero").addEventListener("click", () => {
    alert("¡Gracias por visitar nuestra landing! 🚀");
});

document.querySelectorAll(".btnService").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        alert(`Has seleccionado el servicio #${index + 1}`);
    });
});
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("name").value;
    const mensaje = document.getElementById("message").value;

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    if (mensaje.length < 5) {
        alert("El mensaje es muy corto.");
        return;
    }

    alert(`Gracias por tu mensaje, ${nombre}. Te responderemos pronto.`);
    e.target.reset();
});

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 200 ? "block" : "none";
});

btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
