/*jslint browser: true*/
/*global $, jQuery*/
/*global alert */
(function ($) {
  'use strict';
  // $(".fancybox").fancybox({
  //   openEffect  : 'elastic',
  //   closeEffect : 'elastic',
  //   padding     : 0,
  //   autoCenter  : true,
  //   helpers     :  {
  //     thumbs    : {
  //       width   : 75,
  //       height  : 75
  //     }
  //   },
  // });
  // $.fancybox.helpers.thumbs.onUpdate = function() {};
  $('.gallery-image').lightGallery({
    thumbnail:true,
    showThumbByDefault: true,
    exThumbImage: 'data-exthumbimage'
  });
}(jQuery));
