(function ($) {

  Drupal.behaviors.hr_reviewsRotator = {
    attach: function (context, settings) {
       
      //$("#r-rotator > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true); // for a Version of UI > 1.9
      $("#r-rotator").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 30000, true);
       
      // Pause on hover.
      $("#r-rotator").hover(  
          function() {  
            $("#r-rotator").tabs("rotate",0,true);  
          },  
          function() {  
            $("#r-rotator").tabs("rotate",30000,true);  
          }  
      );  
       
    }
  };

}(jQuery));
