// $(document).ready(function() {
//     $('.carousel__inner').slick({
//         speed: 1000,
//         adaptiveHeight: false,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/left_slide.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/right_slide.png"></button>',
//         responsive: [{
//             breakpoint: 991,
//             settings: {
//                 asNavFor: null,
//                 dots: true,
//                 arrows: false,
//                 dotsClass: "slick-dots",
//                 draggable: true,

//             }
//         }]

//     });
// });
// $('.slick-dots button').text("");
let slider = tns({
    container: ".carousel__inner",
    items: 1,
    slideBy: "page",
    autoplay: false,
    controls: false,
    nav: false
});
document.querySelector('.prev').addEventListener("click", function() {
    slider.goTo("prev");
});
document.querySelector('.next').addEventListener("click", function() {
    slider.goTo("next");
});
$(document).ready(function() {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });



    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();

                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    //modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    // $('.button_mini').on('click', function() {
    //     $('.overlay, #order').fadeIn('slow');
    // });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    //validate


    function validateForms(form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, ввдите свое имя",
                phone: "Пожалуйста, ввдите свой номер телефона",
                email: {
                    required: "Пожалуйста, ввдите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }

        });
    }
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');


    //mask
    $('input[name=phone]').mask("+375 (99) 999-9999");
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()

        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    //scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }

    });


    $("a[href^='#up']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    new WOW().init();


});