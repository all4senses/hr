(function ($) {

  Drupal.behaviors.hr_makeImagesZoomable = {
    attach: function (context, settings) {
       
       //$(".full-content img").colorbox({iframe:true, innerWidth:425, innerHeight:344});
       //$(".full-content img").colorbox({rel:"gallery"});
       $("a.zoom").css('cursor', 'pointer').css('cursor', '-webkit-zoom-in').css('cursor', '-moz-zoom-in').colorbox({
         //href: this.src
         width:"40%", 
         height:"80%"
//         ,href: function() {
//           //console.log(this.src);
//           return this.src;
//         }
       });
       //console.log('full content!');
       
    }
  };

}(jQuery));
