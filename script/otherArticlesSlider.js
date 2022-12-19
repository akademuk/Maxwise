$(function () {
    $('.otherArticlesContent').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        variableWidth: true,
        prevArrow: $('.otherArticlesPrev'),
        nextArrow: $('.otherArticlesNext'),
        appendDots: $('.otherArticlesSliderDots'),
    });
});