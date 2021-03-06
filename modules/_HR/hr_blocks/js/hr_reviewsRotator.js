(function ($) {

  Drupal.behaviors.hr_reviewsRotator = {
    attach: function (context, settings) {
       
      //$("#r-rotator > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true); // for a Version of UI > 1.9
      
      
      
      //var rtabs = $("#r-rotator").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 10000, true);
      var rtabs = $("#r-rotator").tabs({fx:{opacity: "toggle"}}); // Without auto rotation
      var ltabs = rtabs.tabs('length');
       
      // Pause rotation  on hover.
      /*
      $("#r-rotator").hover(  
          function() {  
            $("#r-rotator").tabs("rotate",0,true);  
          },  
          function() {  
            $("#r-rotator").tabs("rotate",10000,true);  
          }  
      ); 
      */  
        
      $("#r-rotator-wrapper #next").click(function() {
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
      
      $("#r-rotator-wrapper #prev").click(function() {
          var active = $( "#r-rotator" ).tabs( "option", "selected" );
          if (active == 0 ) {
            active = ltabs - 1;
          }
          else {
            active--;
          }

          rtabs.tabs('select', active);
      });
       
       
       
       $("#r-rotator .ui-tabs-panel").removeClass('hidden'); 
       
    }
  };

}(jQuery));
