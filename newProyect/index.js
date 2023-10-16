const d = document;
const mainButton = d.querySelector('.main__button');
const firstSection = d.querySelector('.intro__page');
const brandName = d.querySelector('.nav__text');
const discoverSection = d.querySelector('.discover');
const exploreButton = d.querySelector('.exploreButton')
const buttonMenu = d.querySelector('.menu__button')
const menu = d.querySelector('.menu__one')
/* const navButton = d.getElementsByClassName('valuesButton')[0]
const loveContainer = d.querySelector('.love__container')

navButton.addEventListener('click', ()=>{

    discoverSection.classList.add('animate')

    discoverSection.addEventListener('animationend', ()=>{
        discoverSection.classList.add('inactive')
    })

    loveContainer.classList.remove('inactive')
   

}) */

buttonMenu.addEventListener('click', ()=>{
    menu.classList.remove('inactive')
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


    
// Reload the page when the brand name is clicked
brandName.addEventListener('click', () => {
    location.reload();
});

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
        img: '../Assets/img/recipeone.png',
        subtitle: 'Delicious Korean stir-fry.',
        title : 'JAPCHAE',
        description : 'Sweet and savory Korean dish of beef, vegetables, and glass noodles stir-fried to perfection.',
        buttonText: '$550 - ADD'

    },
    {
        img: '../Assets/img/recipetwo.png',
        subtitle: 'Colorful Korean bowl',
        title : 'BIMBIMBAP',
        description : 'Colorful Korean rice dish with assorted veggies, meat, and a spicy sauce; a true delight.',
        buttonText: '$250 - ADD'

    },
    {
        img: '../Assets/img/recipethree.png',
        subtitle: 'Spicy Korean staple.',
        title : 'KIMCHI',
        description : 'Spicy, fermented cabbage with a tangy kick; a staple side dish in Korean cuisine.',
        buttonText: '$600 - ADD'
    },
    {
        img: '../Assets/img/recipefour.png',
        subtitle: 'Tasty Korean grill.',
        title : 'DALGALBI',
        description : 'Spicy stir-fried chicken dish with vegetables; bursting with flavors and a popular choice.',
        buttonText: '$800 - ADD'
    },
    {
        img: '../Assets/img/recipefive.png',
        subtitle: 'Savory Korean barbecue.',
        title : 'BULGOGI',
        description : 'Thinly sliced beef marinated in a flavorful sauce, grilled to tender perfection; a must-try BBQ dish.',
        buttonText: '$215 - ADD'
    },
    {
        img: '../Assets/img/recipesix.png',
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
            