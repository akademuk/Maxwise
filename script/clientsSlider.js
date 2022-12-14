if (window.matchMedia("(max-width: 1200px)").matches) {
    $('.aboutMaxwiseClientsImg').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
          ]
    });
} 