document.addEventListener("DOMContentLoaded", function() {
    // Busca el texto original que dejaste oculto en el HTML
    const elementoOculto = document.getElementById("codigo-oculto");
    
    // Si no existe en la página actual, detenemos el script
    if (!elementoOculto) return; 

    const textToType = elementoOculto.innerText;
    const destination = document.getElementById("typing-text");
    const typingSpeed = 35; // Milisegundos por letra (ajusta a tu gusto)
    let i = 0;

    // Asegurarse de que el destino esté vacío al cargar
    destination.textContent = "";

    function typeEffect() {
        if (i < textToType.length) {
            // Añadimos el texto plano, respetando símbolos de C
            destination.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    // Un retraso de medio segundo antes de empezar a escribir da un toque muy realista
    setTimeout(typeEffect, 500); 
});
