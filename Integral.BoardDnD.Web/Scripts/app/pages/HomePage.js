$(document).ready(function () {
    $('.item').hover(function () {
        $(this).find('ul').stop().slideToggle();
    });
});