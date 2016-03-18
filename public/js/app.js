/*jslint browser: true*/
/*global $, jQuery*/
/*global alert */
(function ($) {
  'use strict';
  $('.gallery-image').lightGallery({
    thumbnail:true,
    showThumbByDefault: true,
    download: false,
    // fullScreen: true,
    width: '100%',
    exThumbImage: 'data-exthumbimage'
  });
}(jQuery));
