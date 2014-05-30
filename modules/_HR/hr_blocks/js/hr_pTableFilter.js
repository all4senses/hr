(function ($) {

  Drupal.behaviors.hr_tablePfilter = {
    attach: function (context, settings) {
        
        var checked = false;
        console.log('Initiate filter...');
        
        
        $("#p_filter").change(function() {
          console.log('On change...');
          console.log($(this).val());
          // Works
          //alert( this.value ); // or $(this).val()
          
          $( "tr" ).each(function( index ) {
            console.log(index);
            console.log(this);
          });
          
          switch ($(this).val()) {
              case "Top 5": console.log("a1"); break;
              case "Best Refund": console.log("a2"); break;
              case "Worst Refund": console.log("a3"); break;
              default: console.log("default"); break;;
          }
        
        });
       
         
        $( "tr" ).each(function( index ) {
          console.log(index);
        });
          
        
    }
  };

}(jQuery));