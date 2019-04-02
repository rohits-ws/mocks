$(document).ready(() => {

    $('.shoe-details').show();

    $('.more-details-button').on('click', event => {
        $(event.currentTarget).closest('.product-details').next('.shoe-details').toggle();
    });

    $('.shoe-details li').on('click', event => {
        $(event.currentTarget).addClass('active');
        $(event.currentTarget).siblings().removeClass('active');
        $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled');
    });

    $('.shoe-details li').on('click', event => {
        ;
    });


    ///////////////////////////////////////////
    $('.login-button').on('click', () => {
        $('.login-form').toggle();
        $('.login-button').toggleClass('button-active');
    });

    $('.product-photo').on('mouseenter', () => {
        $(this).addClass('photo-active');
    }).on('mouseleave', function () {
        $(this).removeClass('photo-active');
    });

    $('.menu-button').on('click', () => {
        $('.menu-button').toggleClass('button-active');
        $('.nav-menu').toggleClass('hide');
    });
})