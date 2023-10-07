
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
 
    
});


