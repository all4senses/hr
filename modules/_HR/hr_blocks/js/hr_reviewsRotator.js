(function ($) {

  Drupal.behaviors.hr_reviewsRotator = {
    attach: function (context, settings) {
       
      //$("#r-rotator > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true); // for a Version of UI > 1.9
      $("#r-rotator").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 3000, true);
       
      // Pause on hover.
      $("#r-rotator").hover(  
          function() {  
            $("#r-rotator").tabs("rotate",0,true);  
          },  
          function() {  
            $("#r-rotator").tabs("rotate",3000,true);  
          }  
      ); 
        
        
      $("#next-review").click(function() {
          console.log('click');
          var active = $( "#r-rotator" ).tabs( "option", "active" );
          console.log(active);
          $( "#r-rotator" ).tabs( "option", "active", active + 1 );

      });
       
    }
  };

}(jQuery));
