const btnMenu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__nav');
const bodyMenuScroll = document.querySelector('body')

btnMenu.addEventListener('click', function(){    
            btnMenu.classList.toggle('header__btn-menu--active');
            menu.classList.toggle('header__nav--open');
            bodyMenuScroll.classList.toggle('header__nav-scroll')
        })  



var accordionItemTitles = document.querySelectorAll(".info__col-item");

for (var i = 0; i < accordionItemTitles.length; i++) {
    accordionItemTitles[i].addEventListener("click", 
    function (event) {
    event.preventDefault();
    event.target.classList.toggle("active");
    var accordionItemContent = event.target.nextElementSibling;
    
    if (!accordionItemContent.classList.contains('active')) {
        accordionItemContent.classList.add('active');
        accordionItemContent.style.height = 'auto';

        var height = accordionItemContent.clientHeight + 'px';

        accordionItemContent.style.height = '0px';

        setTimeout(function () {
        accordionItemContent.style.height = height;
        }, 0);
    } else {
        accordionItemContent.style.height = '0px';

        accordionItemContent.addEventListener('transitionend', 
        function () {
            accordionItemContent.classList.remove('active');
        }, {
            once: true
        });
        }
    });
}