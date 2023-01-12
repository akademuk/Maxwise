$(function () {
    $('.servicesSlider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.servicesSliderPrev'),
        nextArrow: $('.servicesSliderNext'),
        appendDots: $('.servicesSliderDots'),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 4,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    variableWidth: true,
                }
            },
        ]
    });
});