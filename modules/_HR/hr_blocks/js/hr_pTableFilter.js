(function ($) {

  Drupal.behaviors.hr_tablePfilter = {
    attach: function (context, settings) {
        
        var checked = false;
        console.log('xxx');
        
        
        $('#p_filter').click(function() {
          console.log('zzz');
          //console.log($(this).val());
          //alert( this.value ); // or $(this).val()
        });
       
       
        $('#p_filter').on('change', function() {
          console.log('yyy');
          //console.log($(this).val());
          //alert( this.value ); // or $(this).val()
        });
         
        $( 'tr' ).each(function( index ) {
          console.log(index);
        });
          
        
    }
  };

}(jQuery));