/*jslint browser: true*/
/*global $, jQuery*/
/*global alert */

function equalise_cols() {
  var heights = $(".row-eq-height img").map(function () {
    return $(this).height();
  }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(".row-eq-height").height(maxHeight);
}

(function ($) {
  'use strict';

  // var $lg = $('.gallery-image');

  // $lg.lightGallery();

  // // Perform any action just before opening the gallery
  // $lg.on('onBeforeOpen.lg',function(event){
  //     // $('.desc-wrapper').css("z-index", 0);
  // });

  // // custom event with extra parameters
  // // index - index of the slide
  // // fromTouch - true if slide function called via touch event or mouse drag
  // // fromThumb - true if slide function called via thumbnail click
  // $lg.on('onBeforeSlide.lg',function(event, index, fromTouch, fromThumb){
  //     console.log(index, fromTouch, fromThumb);
  // });

  $('.gallery-image').lightGallery({
    thumbnail : true,
    showThumbByDefault : true,
    download : false,
    // fullScreen: true,
    width : '100%',
    mode: 'lg-fade',
    exThumbImage : 'data-exthumbimage'
  });
equalise_cols();
// window.on('resize');
}(jQuery));
