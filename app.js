$(document).ready(function(){
    $('.ham').click(function(){
        $('.item-menu').toggleClass('change');
        $('.log').toggleClass('change');
        $('.ham').toggleClass('change');
    });
    $('.nav-link a').click(function(){
        $('.item-menu').removeClass('change');
        $('.log').removeClass('change');
        $('.ham').removeClass('change');
    });
    $('.log a').click(function(){
        $('.item-menu').removeClass('change');
        $('.log').removeClass('change');
        $('.ham').removeClass('change');
    });
});