$(function () {
    $('.transformSlider').slick({
        dots: true,
        arrows: true,
        infinite: true,
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
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    slidesToShow: 1.5,
                    infinite: false,
                }
            }
        ]
    });
});