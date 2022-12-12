$(function () {
    $('.transformSlider').slick({
        dots: true,
        rows: 2,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
        prevArrow: $('.transformSliderPrev'),
        nextArrow: $('.transformSliderNext'),
        appendDots: $('.transformSliderDots'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 0,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });
});