(function ($) {

  Drupal.behaviors.hr_tablePfilter = {
    attach: function (context, settings) {
        
        var checked = false;
        
        $('#p_filter').on('change', function() {
          console.log('xxx');
          console.log($(this).val());
          //alert( this.value ); // or $(this).val()
        });
        
          $( "tr" ).each(function( index ) {
            consoe.log(index);
          });
          
        
    }
  };

}(jQuery));