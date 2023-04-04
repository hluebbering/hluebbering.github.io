// svg icons support ie11
(function () {
    svg4everybody();
})();

// header
(function () {
    var header = $('.js-header'),
        burger = header.find('.js-header-burger'),
        wrap = header.find('.js-header-wrap'),
        bg = header.find('.js-header-bg'),
        logo = header.find('.js-header-logo');

    // header menu mobile
    burger.on('click', function () {
        burger.toggleClass('active');
        wrap.toggleClass('visible');
        bg.toggleClass('show');
        logo.toggleClass('toggle');
    });

    bg.on('click', function () {
        burger.removeClass('active');
        wrap.removeClass('visible');
        bg.removeClass('show');
        logo.removeClass('toggle');
    });
})();

// global variables
var prevArrow = '<button type="button" class="slick-prev"><svg class="icon icon-arrow-prev"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use></svg></button>',
    nextArrow = '<button type="button" class="slick-next"><svg class="icon icon-arrow-next"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use></svg></button>';

$(document).ready(function () {

    // details
    (function () {
        var details = $('.js-details'),
            sliderDetails = details.find('.js-details-slider'),
            year = details.find('.js-details-year'),
            selectDetails = details.find('.js-details-select'),
            prev = details.find('.js-prev'),
            next = details.find('.js-next');

        sliderDetails.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            year.removeClass('active');
            year.eq(currentSlide).addClass('active');
            selectDetails.find('option').removeAttr('selected');
            selectDetails.find('option').eq(currentSlide).prop('selected', 'selected');
        });

        sliderDetails.on('init reInit', function (event, slick, currentSlide, nextSlide) {
            var activeYear = 3;
            year.eq(activeYear).addClass('active');
        });

        sliderDetails.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 3,
            dots: false,
            arrows: true,
            prevArrow: sliderDetails.parents('.js-details').find('.js-prev'),
            nextArrow: sliderDetails.parents('.js-details').find('.js-next'),
            speed: 700,
            // fade: true,
            adaptiveHeight: true
        });

        year.on('click', function () {
            year.removeClass('active');
            $(this).addClass('active');
            yearIndex = $(this).index();
            sliderDetails.slick('slickGoTo', yearIndex);
        });

        selectDetails.change(function () {
            var optionIndex = selectDetails.find('option:selected').index();
            sliderDetails.slick('slickGoTo', optionIndex);
        });
    })();

    // work
    (function () {
        var work = $('.js-work'),
            sliderWork = work.find('.js-work-slider');

        sliderWork.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: sliderWork.parents('.js-work').find('.js-prev'),
            nextArrow: sliderWork.parents('.js-work').find('.js-next'),
            speed: 700,
            // fade: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    focusOnSelect: true,
                    vertical: true,
                    verticalSwiping: true
                }
            }]
        });
    })();

    // achievement
    $('.js-achievement-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 700
    });

    // overview
    $('.js-overview-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 700
    });

    // quality
    $('.js-quality-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        speed: 700,
        adaptiveHeight: true
    });

    // cases
    (function () {
        var cases = $('.js-cases'),
            sliderCases = cases.find('.js-cases-slider');

        sliderCases.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: sliderCases.parents('.js-cases').find('.js-prev'),
            nextArrow: sliderCases.parents('.js-cases').find('.js-next'),
            speed: 700,
            // fade: true,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    })();
});

// aos animation
AOS.init();

// parallax effect
(function () {
    var parallax = $('.js-parallax');
    if (parallax.length) {
        parallax.each(function () {
            var _this = $(this),
                scale = _this.data('scale'),
                orientation = _this.data('orientation');

            new simpleParallax(_this[0], {
                scale: scale,
                orientation: orientation,
                overflow: true,
                delay: .6,
                transition: 'cubic-bezier(0,0,0,1)'
            });
        });
    }
})();

// scroll to section
(function () {
    var link = $('.js-scroll');
    link.click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000
        });
        return false;
    });
})();