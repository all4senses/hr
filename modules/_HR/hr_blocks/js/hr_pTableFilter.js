(function ($) {

  Drupal.behaviors.hr_tablePfilter = {
    attach: function (context, settings) {
        
        var checked = false;
        console.log('Initiate filter...');
        
        
        $('#p_filter').change(function() {
          console.log('On change...');
          console.log($(this).val());
          // Works
          //alert( this.value ); // or $(this).val()
        });
       
         
        $( "tr" ).each(function( index ) {
          console.log(index);
        });
          
        
    }
  };

}(jQuery));