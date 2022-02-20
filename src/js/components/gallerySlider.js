export default function gallerySlider(sliderCLass) {
  if ($(sliderCLass).length > 0) {
    $(sliderCLass).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      speed: 500,
      infinite: true,
      cssEase: 'linear',
      nextArrow: '<button type="button" class="gallery__slider__arrow next cust-slick-arrow-next"><svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '              <path d="M21.1538 6L21.8655 6.70253L22.559 6L21.8655 5.29747L21.1538 6ZM21.8655 5.29747L16.7886 0.154613L15.3653 1.55967L20.4422 6.70253L21.8655 5.29747ZM20.4422 5.29747L15.3653 10.4403L16.7886 11.8454L21.8655 6.70253L20.4422 5.29747ZM11.8462 5H0V7H11.8462V5Z" ></path>\n' +
        '            </svg></button>',
      prevArrow: '<button type="button" class="gallery__slider__arrow prev cust-slick-arrow-prev"><svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '              <path d="M21.1538 6L21.8655 6.70253L22.559 6L21.8655 5.29747L21.1538 6ZM21.8655 5.29747L16.7886 0.154613L15.3653 1.55967L20.4422 6.70253L21.8655 5.29747ZM20.4422 5.29747L15.3653 10.4403L16.7886 11.8454L21.8655 6.70253L20.4422 5.29747ZM11.8462 5H0V7H11.8462V5Z" ></path>\n' +
        '            </svg></button>',
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            customPaging: function (slider, i) {
              return '<span class="dot"></span>';
            },
          },
        },
      ]
    });

  }
}
