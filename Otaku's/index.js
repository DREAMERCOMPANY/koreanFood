const d = document;
const mainButton = d.querySelector('.main__button');
const firstSection = d.querySelector('.intro__page');
const discoverSection = d.querySelector('.discover');
const exploreButton = d.querySelector('.exploreButton')
const buttonMenu = d.querySelector('.menu__button')
const menu = d.querySelector('.menu__one')
const menuText = d.querySelector('.menu__view')
const visit = d.querySelector('.menu__visit')
const commentButton = d.querySelector('#comments')
const commentSection = d.querySelector('.learn__experience')
const learnCards = d.querySelectorAll('.learn__card--item')
const planButton = d.querySelector('#plans__button')
const planContainer = d.querySelector('.plans__cards')
const planCards = d.querySelectorAll('.plans__card')
const footerInput = d.querySelector('.footer__up--input')
const footerBtn = d.querySelector('.footer__up--button')
const navIcon = d.querySelector('.nav__icon')
const menuMobile = d.querySelector('.menu__mobile')
const shadow = d.querySelector('.shadow')
const menuCloseIcon = d.querySelector('.menu__mobile--icon')
/* const navButton = d.getElementsByClassName('valuesButton')[0]
const loveContainer = d.querySelector('.love__container')

navButton.addEventListener('click', ()=>{

    discoverSection.classList.add('animate')

    discoverSection.addEventListener('animationend', ()=>{
        discoverSection.classList.add('inactive')
    })

    loveContainer.classList.remove('inactive')
   

}) */

menuCloseIcon.addEventListener('click', ()=>{
    menuMobile.style.animation = 'moveOut 1s 0s ease-in-out forwards' 
    shadow.classList.add('inactive') 
})


shadow.addEventListener('click', ()=>{

    if(!menuMobile.classList.contains('inactive')){
        menuMobile.style.animation = 'moveOut 1s 0s ease-in-out forwards' 
        shadow.classList.add('inactive') 
    }
})

navIcon.addEventListener('click', ()=>{
        menuMobile.style.animation = 'moveIn 1s 0s ease-in-out forwards' 
        shadow.classList.remove('inactive') 
        menuMobile.classList.remove('inactive') 
})


footerInput.addEventListener('input', ()=>{
    
    if(footerInput.value == ''){
        footerBtn.classList.add('inactive')
    }else{
        footerBtn.classList.remove('inactive')
    }
})

function showHideComments(actionButton, initial, final, arr, container) {
    const viewComment = actionButton.innerText == initial;
    const hideComment = actionButton.innerText == final;

    if (viewComment) {
        actionButton.innerText = final;

        for (let i = 0; i < arr.length; i++) {
            const delay = i * 0.5; // Ajusta el valor de retraso según tus preferencias
            arr[i].style.opacity = 0;
            arr[i].style.animation = `fadeIn 1s ease-in forwards ${delay}s`;
        }
    }

    if (hideComment) {
        actionButton.innerText = initial;

        let animationsCompleted = 0;

        for (let i = arr.length - 1; i >= 0; i--) {
            const delay = (arr.length - i - 1) * 0.5;

            arr[i].style.opacity = 1;
            arr[i].style.animation = `fadeOut 1s ease-in-out  forwards ${delay}s`;

            arr[i].addEventListener('animationend', () => {
                animationsCompleted++;

                if (animationsCompleted === arr.length) {
                    // Todas las animaciones 'fadeOut' han terminado
                    container.classList.add('inactive');
                }
            });
        }
    }

    container.classList.remove('inactive');
}

commentButton.addEventListener('click',()=> showHideComments(commentButton, 'View comments', 'Hide comments', learnCards, commentSection));

planButton.addEventListener('click', ()=>{
    showHideComments(planButton, 'View plans', 'Hide plans', planCards, planContainer)
    
} 

)


buttonMenu.addEventListener('click', ()=>{
    menu.classList.toggle('inactive')
    const showMenu = menuText.innerText == 'View menu'

    if(showMenu){
        menuText.innerText = 'Hide menu'
    } else{
        menuText.innerText = 'View menu'
    }
     
})


exploreButton.addEventListener('click', ()=>{
    exploreButton.style.display = 'none'
    renderCards(recipies)
    const cardsContainer = d.querySelector('.cards__container')
    const navButtonContainer = d.querySelector('.nav__button')
    cardsContainer.classList.remove('inactive')
    navButtonContainer.classList.remove('inactive')
    navButton.classList.remove('inactive')
    
})

visit.addEventListener('click', ()=>{
     // Dirección que deseas abrir en Google Maps
     var direccion = "cll 72 # 54-80";
    
     // URL personalizada para abrir Google Maps con la dirección
     var url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(direccion);
     console.log(url)
 
     // Abre Google Maps en una nueva ventana o pestaña del navegador
     window.open(url, "_blank");
})
    


// Change button color on mouseover
mainButton.addEventListener('mouseover', () => {
    mainButton.style.background = '#EA6300';
});

mainButton.addEventListener('mouseout', () => {
    mainButton.style.background = '#FE903F';
});

// Animate the first section and hide it when the main button is clicked
mainButton.addEventListener('click', () => {
    setTimeout(() => {
        firstSection.classList.add('animate');
    }, 100);

    // Listen for the animation end event
    firstSection.addEventListener('animationend', () => {
        firstSection.classList.add('inactive'); // Hide the container once the animation is complete
    });

    discoverSection.classList.remove('inactive'); // Show the .parrafito paragraph
});

const recipies = []
console.log(recipies)
recipies.push(
    {
        img: './Assets/img/recipeone.png',
        subtitle: 'Delicious Korean stir-fry.',
        title : 'JAPCHAE',
        description : 'Sweet and savory Korean dish of beef, vegetables, and glass noodles stir-fried to perfection.',
        buttonText: '$550 - ADD'

    },
    {
        img: './Assets/img/recipetwo.png',
        subtitle: 'Colorful Korean bowl',
        title : 'BIMBIMBAP',
        description : 'Colorful Korean rice dish with assorted veggies, meat, and a spicy sauce; a true delight.',
        buttonText: '$250 - ADD'

    },
    {
        img: './Assets/img/recipethree.png',
        subtitle: 'Spicy Korean staple.',
        title : 'KIMCHI',
        description : 'Spicy, fermented cabbage with a tangy kick; a staple side dish in Korean cuisine.',
        buttonText: '$600 - ADD'
    },
    {
        img: './Assets/img/recipefour.png',
        subtitle: 'Tasty Korean grill.',
        title : 'DALGALBI',
        description : 'Spicy stir-fried chicken dish with vegetables; bursting with flavors and a popular choice.',
        buttonText: '$800 - ADD'
    },
    {
        img: './Assets/img/recipefive.png',
        subtitle: 'Savory Korean barbecue.',
        title : 'BULGOGI',
        description : 'Thinly sliced beef marinated in a flavorful sauce, grilled to tender perfection; a must-try BBQ dish.',
        buttonText: '$215 - ADD'
    },
    {
        img: './Assets/img/recipesix.png',
        subtitle: 'Korean grilled ribs.',
        title : 'GALBI',
        description : 'Grilled beef short ribs marinated in a mouthwatering sauce; an absolute favorite at Korean BBQ.',
        buttonText: '$300 - ADD'
    }

)


            /*<div class="recipies__cards--content">
                    <div class="recipies__cards--hero"></div>
                    <span class="recipies__cards--icon white__heart"></span>
                    <span class="recipies__cards--recipe">
                        <img class="recipies__cards--img" src="../Assets/img/recipetwo.png" alt="">
                    </span>
                    <div class="recipies__cards--info">
                        <p>Delicious Korean stir-fry.</p>
                        <p>JAPCHAE</p>
                        <p>Sweet and savory Korean dish of beef, vegetables, and glass noodles stir-fried to perfection.</p>
                        <button >$550 - ADD</button>
                    </div>
            </div>*/

             function renderCards(arr){
                for (recipie of recipies){

                    /*Create elements and add classes*/
                    const cardsContainer = d.querySelector('.cards__container')
                    const recipieContent = d.createElement('div')
                    recipieContent.classList.add('recipies__cards--content')
                    const recipieHero = d.createElement('div')
                    recipieHero.classList.add('recipies__cards--hero')
                    const recipieIcon = d.createElement('span')
                    recipieIcon.classList.add('recipies__cards--icon', 'white__heart')
                    const recipieImageContainer = d.createElement('span')
                    recipieImageContainer.classList.add('recipies__cards--recipe')
                    const recipieImage = d.createElement('img')
                    recipieImage.classList.add('recipies__cards--img')
                    recipieImage.setAttribute('src', recipie.img)
                    const recipieInfo = d.createElement('div')
                    recipieInfo.classList.add('recipies__cards--info')
                    const recipieInfoSubtitle = d.createElement('p')
                    recipieInfoSubtitle.innerText = recipie.subtitle
                    const recipieInfoTitle = d.createElement('p')
                    recipieInfoTitle.innerText = recipie.title
                    const recipieInfoDesc = d.createElement('p')
                    recipieInfoDesc.innerText = recipie.description
                    const recipieButton = d.createElement('button')
                    recipieButton.innerText = recipie.buttonText

                    /*Organize elements*/

                    recipieInfo.appendChild(recipieInfoSubtitle)
                    recipieInfo.appendChild(recipieInfoTitle)
                    recipieInfo.appendChild(recipieInfoDesc)
                    recipieInfo.appendChild(recipieButton)
                    recipieImageContainer.appendChild(recipieImage)

                    recipieContent.appendChild(recipieHero)
                    recipieContent.appendChild(recipieIcon)
                    recipieContent.appendChild(recipieImageContainer)
                    recipieContent.appendChild(recipieInfo)

                    
                    cardsContainer.appendChild(recipieContent)

                    /*Accessing to icons hearts*/

                }

                const recipiesContent = d.querySelectorAll('.recipies__cards--content');

                for (let i = 0; i < recipiesContent.length; i++) {
                    const element = recipiesContent[i];
                    const dynamicClass = `recipe-${i + 1}`;
                    element.classList.add(dynamicClass);
                }


                const hearts = document.querySelectorAll('.recipies__cards--icon');

                    console.log(hearts)


                    hearts.forEach((heart, index) => {
                        heart.addEventListener('click', () => {
                            heart.classList.toggle('orange__heart');
                        });
                    });
              
            }
            