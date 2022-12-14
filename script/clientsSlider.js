$(function () {
  $('.aboutMaxwiseClientsImg').slick({
      infinite: false,
      dots: false,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 5,
              }
          },
          {
            breakpoint: 767,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
            }
        },
      ]
  });
});