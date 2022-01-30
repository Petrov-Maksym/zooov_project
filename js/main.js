const btnMenu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__nav');

btnMenu.addEventListener('click', function(){    
            btnMenu.classList.toggle('header__btn-menu--active');
            menu.classList.toggle('header__nav--open');
        })  





