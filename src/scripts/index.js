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


    $("body").on("click", ".tabs-header > a", function (event) {
        event.preventDefault(); // отключаем переход по ссылке
        const tabIndex = $(this).data("tab-index"); // this - нажатый html тег (ссылка)
        console.log(`Clicked tab index: ${tabIndex}`);
        $(this).parent().find("a").removeClass("active"); // удаляем все классы active с .tabs-header>a
        // parent- родитель, find - найти
        // $(this).closest(".tabs").find(".tab").fadeOut(600);
        $(this).closest(".tabs").find(".tab").removeClass("active"); // Удаляем все классы aactive со всех элементов .tab
        // closest (ближайший) - находит первого родителя с селектором, указанном в первом аргементе (.tabs)

        $(this).closest(".tabs").find(".tab").eq(tabIndex).addClass("active");
        // $(this).closest(".tabs").find(".tab").eq(tabIndex).fadeIn(600);
        $(this).addClass("active");
    });

    $("body").on("click", ".accordion__item__name", function (e) {
        e.preventDefault();
        // $(this).closest(".accordion").find(".accordion__item").removeClass("active");
        // $(this).closest(".accordion__item").addClass("active");
        $(this).closest(".accordion__item").toggleClass("active");
    });
});
// const, let
