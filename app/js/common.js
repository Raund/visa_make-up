$(function(){

    // scroll body to 0px on click
    $('.arrow-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});