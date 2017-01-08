$(function(){

    // scroll body to 0px on click
    $('.arrow-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //make interactive map
    $("map area").hover(function () {
        console.info('hover', this);
        var img = $(this).attr('data-hover-img');
        //console.info('hover img', img);
        $('#' + img).addClass('active');
        $('.wrapper_section-2').find('.region-block').addClass('active');
    },
    function () {
        console.info('unhover', this);
        var img = $(this).attr('data-hover-img');
        //console.info('unhover img', img);
        $('#' + img).removeClass('active');
    });
});