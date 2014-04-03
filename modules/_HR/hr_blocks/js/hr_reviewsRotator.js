(function ($) {

  Drupal.behaviors.hr_reviewsRotator = {
    attach: function (context, settings) {
       
      //$("#r-rotator > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true); // for a Version of UI > 1.9
      var rtabs = $("#r-rotator").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 10000, true);
      var ltabs = rtabs.tabs('length');
       
      // Pause on hover.
      $("#r-rotator").hover(  
          function() {  
            $("#r-rotator").tabs("rotate",0,true);  
          },  
          function() {  
            $("#r-rotator").tabs("rotate",10000,true);  
          }  
      ); 
        
        
      $("#next-review").click(function() {
          var active = $( "#r-rotator" ).tabs( "option", "selected" );
          if (active == ltabs - 1 ) {
            active = 0;
          }
          else {
            active++;
          }

          rtabs.tabs('select', active);
          // Doesn't work - other version (newer)
          //$( "#r-rotator" ).tabs( "option", "active", active + 1 );

      });
      
      $("#prev-review").click(function() {
          var active = $( "#r-rotator" ).tabs( "option", "selected" );
          if (active == 0 ) {
            active = ltabs - 1;
          }
          else {
            active--;
          }

          rtabs.tabs('select', active);
      });
       
    }
  };

}(jQuery));
