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
/*
        console.info('hover', this);
*/
        var img = $(this).attr('data-hover-img');
        //console.info('hover img', img);
        $('.map-part_red').fadeOut(0);
        $('.' + img + '_red').fadeIn(0);
        //$('.map-part').fadeOut(300);
        $('.region-block').fadeOut(0);
        $('.region-block[data-region-type=' + img + ']').fadeIn(0);
    },
    function () {
        /*console.info('unhover', this);
        var img = $(this).attr('data-hover-img');
        //console.info('unhover img', img);
        $('.map-part_red').fadeOut(300);
        //$('.' + img).fadeIn(300);
        $('.region-block[data-region-type=' + img + ']').fadeOut(400);*/
    });
/*
    $(".map").hover(function () {
        $('.wrapper_section-2').find('.region-block').removeClass('active');
    },
    function () {
        $('.wrapper_section-2').find('.region-block[data-region-type=north]').addClass('active');
        $('.wrapper_section-2').find('.region-block[data-region-type=north]').addClass('active');
    });
*/
    var Parallax = {
/*
        visaType:{
            element: '.section-1_bg',
            maxBg : 140
        },
*/
        visa:{
            element: '.section-2_bg',
            maxBg : 140
        },
/*
        news:{
            element: '.section-3_bg',
            maxBg : 140
        }
*/
    };

    for(var type in Parallax){
        var offset = $(Parallax[type].element).offset();
        Parallax[type].minTop = offset.top - $(window).height();
        Parallax[type].maxTop = offset.top + $(Parallax[type].element).height();
    }


/*
    console.info('Parallax: ', Parallax);
*/

    $(document).scroll(function () {

        var currentScrollTop = $("body").scrollTop();

        for(var type in Parallax){
            if(currentScrollTop > Parallax[type].minTop
                && currentScrollTop < Parallax[type].maxTop){
                koeficient = (Parallax[type].maxTop - Parallax[type].minTop)/(currentScrollTop - Parallax[type].minTop);
                bgPosY = -(Parallax[type].maxBg/koeficient);
                $(Parallax[type].element).css({'background-position-y' : bgPosY});
/*
                console.info('SCROLL POSITION ' + type,currentScrollTop);
                console.info('BG POSITION ' + type, bgPosY);
*/
            }
        }
        //console.info($scrollValue);
    });

});