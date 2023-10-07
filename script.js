
document.addEventListener("DOMContentLoaded", function () {
    const d = document;

     const loader = d.querySelector(".loader");
    const mainContainer = d.querySelector(".main-container");


    // Escucha el evento 'animationend' en el loader
    loader.addEventListener("animationend", function () {
        mainContainer.style.height = 'auto'
        
    }); 

    const menuIcon = d.querySelector('.nav__icon')
   const menuMobile = d.querySelector('.mobileMenu')
   const closeIcon = d.querySelector('.mobileMenu__closeIcon')
   const body = d.body

   menuIcon.addEventListener('click', showMobileMenu)
   closeIcon.addEventListener('click',closeMobileMenu)

   
   

   function showMobileMenu(){
    menuMobile.classList.toggle('inactive')
   }

   function closeMobileMenu(){
    if(!menuMobile.classList.contains('inactive')){
        menuMobile.classList.add('inactive')
        
    }


   }

   body.addEventListener('click', function (event) {
    
    // Verificar si el menú no está inactivo y si el clic no ocurrió en el menú o en el icono del menú
    if (!menuMobile.classList.contains('inactive') && !menuIcon.contains(event.target) && !menuMobile.contains(event.target)) {
        
        // Aquí puedes agregar el código que deseas ejecutar cuando el menú está abierto y se hace clic fuera de él.
        // Por ejemplo, puedes cerrar el menú aquí.
        menuMobile.classList.add('inactive');
    }
});
  
    
});


