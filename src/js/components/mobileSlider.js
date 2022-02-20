export default function mobileSlider(sliderCLass, breakpoint = 992, toShow = 1) {
  function initSlider(sliderCLass){
    $(sliderCLass).slick({
      slidesToShow: toShow,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      infinite: true,
      cssEase: 'linear',
      dots: true,
      customPaging: function (slider, i) {
        return '<span class="dot"></span>';
      },
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]
    });
  }

  function initOnBreakpoint(sliderCLass){
    if($(window).width() < breakpoint){
      if(!$(sliderCLass).hasClass('slick-initialized')) {
        initSlider(sliderCLass);
      }
    }else {
      if ($(sliderCLass).hasClass('slick-initialized')) {
        $(sliderCLass).slick('unslick');
      }
    }
  }

  if ($(sliderCLass).length > 0) {
    initOnBreakpoint(sliderCLass);
    $(window).on('resize', () => {
      initOnBreakpoint(sliderCLass);
    });
  }

}
