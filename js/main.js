// const btnMenu = document.querySelector('.header__btn-menu');
// const menu = document.querySelector('.header__nav');




const btnMenu = document.querySelector('.header__btn-menu');
const menuModal = document.querySelector('.menu__modal');
const btnClose = document.querySelector('.menu__modal-close');

btnClose.addEventListener('click', function() {
    menuModal.classList.remove('menu__modal--open' );
    btnMenu.classList.remove('header__btn-menu--active');
    })

btnMenu.addEventListener('click', function() {
        menuModal.classList.add('menu__modal--open');
    })


btnMenu.addEventListener('click', function(){    
        btnMenu.classList.toggle('header__btn-menu--active');
        })  