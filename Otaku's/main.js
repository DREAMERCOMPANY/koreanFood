const d = document;

// Selección de elementos principales
const mainButton = d.querySelector('.main__button');
const firstSection = d.querySelector('.intro__page');
const discoverSection = d.querySelector('.discover');
const exploreButton = d.querySelector('.exploreButton');
const buttonMenu = d.querySelector('.menu__button');
const menuMobile = d.querySelector('.menu__mobile');
const shadow = d.querySelector('.shadow');
const menuCloseIcon = d.querySelector('.menu__mobile--icon');

// Menús y secciones
const menuItems = [
  {
    action: d.querySelector('#home__action'),
    section: d.querySelector('#home'),
    list: d.querySelector('.menu__home--list'),
    items: d.querySelectorAll('.listItem'),
    iconArrow: d.querySelector('.arrowHome')
  },
  {
    action: d.querySelector('#article__action'),
    section: d.querySelector('#article'),
    list: d.querySelector('.menu__article--list'),
    items: d.querySelectorAll('.listItemArticle'),
    iconArrow: d.querySelector('.arrowArticle')
  },
  {
    action: d.querySelector('#food__action'),
    section: d.querySelector('#food'),
    list: d.querySelector('.menu__food--list'),
    items: d.querySelectorAll('.listItemFood'),
    iconArrow: d.querySelector('.arrowFood')
  },
  {
    action: d.querySelector('#comment__action'),
    section: d.querySelector('#comment'),
    list: d.querySelector('.menu__comment--list'),
    items: d.querySelectorAll('.listItemComment'),
    iconArrow: d.querySelector('.arrowComment')
  }
];

// Formulario de registro
const loginContent = d.querySelector('.login__content');
const loginItem = d.querySelector('.login__item');
const signBtn = d.querySelector('#signupButton');
const loginItemTitle = d.querySelector('.login__item--title');
const usernameInput = d.querySelector('.login__username');

// Eventos
signBtn.addEventListener('click', handleSignUp);
menuItems.forEach((menuItem) => {
  menuItem.action.addEventListener('click', () => showHideMenu(menuItem));
});
mainButton.addEventListener('mouseover', handleMainButtonMouseOver);
mainButton.addEventListener('mouseout', handleMainButtonMouseOut);
mainButton.addEventListener('click', handleMainButtonClick);
shadow.addEventListener('click', handleShadowClick);

// Función para mostrar u ocultar menús
function showHideMenu(menuItem) {
  const { action, section, list, items, iconArrow } = menuItem;
  iconArrow.classList.toggle('rotateIcon');
  section.classList.toggle('padding__menu');

  if (!section.classList.contains('menu__shadow')) {
    section.classList.add('menu__shadow');
    list.classList.remove('inactive');

    items.forEach((item, i) => {
      const delay = i * 0.4;
      item.style.opacity = 0;
      item.style.animation = `fadeIn 0.5s ease-in-out ${delay}s forwards`;
    });
  } else {
    let animationsCompleted = 0;
    for (let i = items.length - 1; i >= 0; i--) {
      const delay = (items.length - i - 1) * 0.15;
      items[i].style.opacity = 1;
      items[i].style.animation = `fadeOut 0.3s ease-in-out forwards ${delay}s`;

      items[i].addEventListener('animationend', () => {
        animationsCompleted++;
        if (animationsCompleted === items.length) {
          section.classList.remove('menu__shadow');
          list.classList.add('inactive');
          section.classList.remove('padding__menu');
        }
      });
    }
  }
}

// Función para el formulario de registro
function handleSignUp() {
  menuMobile.classList.add('inactive');
  loginContent.classList.remove('inactive');
  loginItem.style.opacity = 0;
  loginItem.style.animation = 'loginOpacityIn 0.5s ease-in-out 0.2s forwards';
  discoverSection.style.overflowY = 'hidden';
  discoverSection.style.height = '100vh';
  loginItemTitle.innerText = 'Sign Up';
  usernameInput.classList.add('inactive');
}

// Funciones para eventos de botón principal
function handleMainButtonMouseOver() {
  mainButton.style.background = '#EA6300';
}

function handleMainButtonMouseOut() {
  mainButton.style.background = '#FE903F';
}

function handleMainButtonClick() {
  setTimeout(() => {
    firstSection.classList.add('animate');
  }, 100);

  firstSection.addEventListener('animationend', () => {
    firstSection.classList.add('inactive');
  });

  discoverSection.classList.remove('inactive');
}

// Función para hacer clic en el fondo sombreado
function handleShadowClick() {
  // Restaurar el estado de los menús abiertos
  menuItems.forEach((menuItem) => {
    menuItem.section.classList.remove('menu__shadow');
    menuItem.list.classList.add('inactive');
  });

  // Restaurar la apariencia del botón principal
  mainButton.style.background = '#FE903F';

  // Restaurar la sección descubrir
  discoverSection.classList.remove('animate');
  discoverSection.style.overflowY = 'visible';

  // Ocultar formulario de registro
  loginContent.classList.add('inactive');
  loginItem.style.opacity = 1;
  loginItem.style.animation = 'loginOpacityOut 0.4s ease-in-out 0s forwards';
  discoverSection.style.height = 'auto';

  // Restaurar otros elementos
  // ...
}
