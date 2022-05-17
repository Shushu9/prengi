$(document).ready(function () {

    //flag tabs 

    $('ul.contacts__tabs').on('click', 'li:not(.contacts__tab_active)', function () {
        $(this)
            .addClass('contacts__tab_active').siblings().removeClass('contacts__tab_active')
            .closest('div.container').find('div.contacts__content')
            .removeClass('contacts__content_active').eq($(this).index()).addClass('contacts__content_active');
    });

    $('.products__carousel').slick({
        speed: 1200,
        // adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    // dots: true,
                    arrows: false
                }
            },
        ]
    });

    // });

    // function toggleSlide(item) {
    //     $(item).each(function (i) {
    //         $(this).on('click', function (e) {
    //             e.preventDefault();
    //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
    //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //         })
    //     })
    // }

    // toggleSlide('.catalog-item__link');
    // toggleSlide('.catalog-item__back');

    //modal

    // $('[data-modal=consultation]').on('click', function () {
    //     $('.overlay, #consultation').fadeIn('slow');
    // });

    // $('.modal__close').on('click', function () {
    //     $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    // });

    // $('.button_mini').each(function (i) {
    //     $(this).on('click', function () {
    //         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    //         $('.overlay, #order').fadeIn('slow');
    //     })
    // });


});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});