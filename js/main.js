$('.burger__btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('burger__btn_active');
    $('.menu').toggleClass('menu__active')
});

$('ul.menu li a').click(function(e) {
    e.preventDefault();
    $('ul.menu').toggleClass('menu__active');
    $('.burger__btn').removeClass('burger__btn_active')
});