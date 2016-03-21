/*jslint browser: true*/
/*global $, jQuery*/
/*global alert */
(function ($) {
  'use strict';
  $('.gallery-image').lightGallery({
    thumbnail : true,
    showThumbByDefault : true,
    download : false,
    // fullScreen: true,
    width : '100%',
    exThumbImage : 'data-exthumbimage'
  });
equalise_cols();
window.on('resize');
}(jQuery));
function equalise_cols() {
  var heights = $(".row-eq-height").map(function () {
    return $(this).height();
  }).get(),
    maxHeight = Math.max.apply(null, heights);
  $(".row-eq-height").height(maxHeight);
}