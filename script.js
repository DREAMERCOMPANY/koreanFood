document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");
    const mainContainer = document.querySelector(".main-container");

    // Escucha el evento 'animationend' en el loader
    loader.addEventListener("animationend", function () {
        mainContainer.style.height = "auto";
       
    });

   
});