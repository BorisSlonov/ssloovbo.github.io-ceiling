//burger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    })
})



//Jquery
$(function () {

    //slowScroll
    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 3000);
        return false;
    });

    //currentLight
    jQuery(window).scroll(function () {
        var $sections = $('.xsection');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('a.active').removeClass('active');
                $('a[href="#' + id + '"]').addClass('active');

            }
        })
    });


    //spoiler
    $('.answer-item__title').click(function (event) {
        if($('.answer-container').hasClass('one')){
            $('.answer-item__title').not($(this)).removeClass('activeA');
            $('.answer-item__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('activeA').next().slideToggle(300);
        
    });

});