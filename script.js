document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.querySelector("section#comprar button");
    buyButton.addEventListener("click", function() {
        alert("Gracias por tu interés en nuestro libro. Redirigiéndote a la página de pago...");
        // Aquí puedes añadir lógica para redirigir a la página de pago.
    });
});