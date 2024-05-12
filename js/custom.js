$(function () {
    $(document).ready(function() {
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
      
          // Add or remove the "sticky" class based on scroll position
          if (scroll >= 700) {
            $('.menubar').addClass('sticky');
          } else {
            $('.menubar').removeClass('sticky');
          }
        });
      });
    // news slider
    $('.bestroom_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: ".right_btn",
      prevArrow: ".left_btn",
      arrows: true,
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
    // news slider
    $('.testimonial_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      infinite: true,
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

    // news slider
    $('.blog_slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      infinite: true,
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
  
  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  progress = document.querySelector(".slider .progress");

  let priceGap = 1000;

  rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        
        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
        // let percent = (minVal / rangeInput[0].max) * 100;
        
    });
  });
});
