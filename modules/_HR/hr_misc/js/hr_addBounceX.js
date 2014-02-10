(function ($) {

  Drupal.behaviors.hr_addBounceX = {
    attach: function (context, settings) {
       
        //console.log('hr_addBounceX');
       
        (function(d) {
            var e = d.createElement('script');
            e.src = d.location.protocol + '//bounceexchange.com/tag/800/i.js';
            e.async = true;
            d.getElementsByTagName("head")[0].appendChild(e);
        }(document));
       
    }
  };

}(jQuery));
