import detectBrowser from './components/detectBrowser';
import 'slick-carousel';
import introSlider from './components/introSlider';
import gallerySlider from './components/gallerySlider';
import hover from './components/hover';
import initHeader from './components/headerOnScroll';
import mobileSlider from './components/mobileSlider';
import navMobile from './components/navMobile';
import validate from 'jquery-validation';

$(document).ready(() => {
  detectBrowser();
  initHeader();
  introSlider('.js-intro-slider');
  gallerySlider('.js-gallery-slider');
  mobileSlider('.js-partners-slider', 1250, 4);
  mobileSlider('.js-services-slider', 1250, 2);
  hover();
  navMobile();

  $('#contact-form').validate({
    rules: {
      firstname: 'required',
      number: true,
    },
    // Specify validation error messages
    messages: {
      firstname: 'Please enter your firstname',
      phone: 'Please enter a valid phone number',
    },
    submitHandler(form) {
      form.submit();
    },
  });

  $('.js-accordion').on('click', (ev) => {
    ev.preventDefault();
    $(ev.currentTarget).toggleClass('active');
    $('.js-accordion-content').slideToggle();
  });



});
