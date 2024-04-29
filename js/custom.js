$(function () {
    $('.banner_slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
              
  },{
              breakpoint: 575.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
              
  },
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
  });
    $('.testimonial_slick').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
              
  },{
              breakpoint: 575.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
              
  },
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
  });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});
