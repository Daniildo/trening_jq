const jQuery = require('jquery');
const $ = jQuery;
const owl = $('.owl-carousel');
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';
import '../styles/index.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery-mousewheel';
import 'animate.css';
console.log(jQuery);



$(document).ready(function(){

    $('.nav-bar__btn').click(function (){
        $(this).children('.nav-bar__on-off').toggleClass('jpa');
        $(this).children('.nav-bar__on-of').toggleClass('jp');
    });

    $('.owl-carousel').owlCarousel({
        autoplay:true,
        slideSpeed:1000,
        items:3,
        margin:30,
        nav:false,
        dots:false,
        loop:true
    });

    $('.popup-btn').click(function (){
        event.preventDefault();
        $('.popup').fadeIn();
    });

    $('.popup__close').click(function (){
        event.preventDefault();
        $('.popup').fadeOut();
    });

    owl.on('mousewheel', '.owl-stage', function (e) {
        console.log(e);
         if (e.originalEvent.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


});
// const, let
