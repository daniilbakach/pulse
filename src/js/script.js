$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left_slide.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right_slide.png"></button>',
        responsive: [{
            breakpoint: 991,
            settings: {
                asNavFor: null,
                dots: true,
                arrows: false,
                dotsClass: "slick-dots",
                draggable: true,

            }
        }]

    });
});
$('.slick-dots button').text("");