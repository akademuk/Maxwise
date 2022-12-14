$(function () {
    $('.servicesSlider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        variableWidth: false,
        prevArrow: $('.servicesSliderPrev'),
        nextArrow: $('.servicesSliderNext'),
        appendDots: $('.servicesSliderDots'),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1.5,
                }
            },
        ]
    });
});