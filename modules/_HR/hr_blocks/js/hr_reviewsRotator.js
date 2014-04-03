(function ($) {

  Drupal.behaviors.hr_reviewsRotator = {
    attach: function (context, settings) {
       
      //$("#r-rotator > ul").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true); // for a Version of UI > 1.9
      var rtabs = $("#r-rotator").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 3000, true);
       console.log(rtabs);
       var ltabs = rtabs.tabs('length');
       console.log('len: ' + ltabs);
       
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
        //console.log($("#r-rotator"));
          //console.log('click');
          var active = $( "#r-rotator" ).tabs( "option", "selected" );
          if (active == ltabs - 1 ) {
            active = 0;
          }
          else {
            active++;
          }

          //console.log(active);
          rtabs.tabs('select', active);
          //$( "#r-rotator" ).tabs( "option", "active", active + 1 );

      });
      
      $("#prev-review").click(function() {
        //console.log($("#r-rotator"));
          //console.log('click');
          var active = $( "#r-rotator" ).tabs( "option", "selected" );
          if (active == 0 ) {
            active = ltabs - 1;
          }
          else {
            active--;
          }

          //console.log(active);
          rtabs.tabs('select', active);
          //$( "#r-rotator" ).tabs( "option", "active", active + 1 );

      });
       
    }
  };

}(jQuery));
