export default function introSlider(sliderCLass) {
  if ($(sliderCLass).length > 0) {
    $(sliderCLass).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      infinite: true,
      fade: true,
      cssEase: 'linear',
      dots: true,
      customPaging(slider, i) {
        return '<span class="dot"></span>';
      },
    });
  }
}
