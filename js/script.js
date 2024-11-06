// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el botón y los elementos que vamos a mostrar
    const verDetallesBtn = document.getElementById('verDetallesBtn');
    const detallesBoda = document.getElementById('detallesBoda');
    const imagenesVestimenta = document.getElementById('imagenesVestimenta');
    const bienvenida = document.getElementById("bienvenida");
    const mensajeAdicional = document.getElementById("mensajeAdicional");

    // Función para mostrar detalles de la boda
    function mostrarDetalles() {
        // Mostrar los detalles de la boda y las imágenes
        detallesBoda.style.display = 'block';
        imagenesVestimenta.style.display = 'block';
        
        // Actualizar el contenido del párrafo de bienvenida
        bienvenida.innerHTML = "¡Gracias por visitar nuestra página! ¡Nos alegra que formes parte de este día tan especial!";

        // Crear un nuevo párrafo con un mensaje especial
        const nuevoMensaje = document.createElement("p");
        nuevoMensaje.classList.add("mensaje-adicional");
        nuevoMensaje.innerHTML = "¡Nos sentimos muy emocionados de contar con tu presencia en nuestra boda!";

        // Añadir el nuevo mensaje al contenedor
        mensajeAdicional.appendChild(nuevoMensaje);
    }

    // Añadir el evento de clic al botón
    verDetallesBtn.addEventListener('click', mostrarDetalles);
});
