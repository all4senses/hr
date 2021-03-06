(function ($) {

  Drupal.behaviors.hr_track_links_datepicker = {
    attach: function (context, settings) {

        
        //console.log('Datepicker!');
        
        $( "#edit-date-from" ).datepicker({
          //defaultDate: "+1w",
          changeMonth: true,
          changeYear: true,
          minDate: new Date(2013, 1, 1),
          maxDate: 'today',
          //showWeek: true,
          //firstDay: 1,
          showAnim: 'slideDown',
          //showButtonPanel: true,
          formatDate: 'yy-mm-dd'
//          ,
//          onClose: function( selectedDate ) {
//            $( "#edit-date-to" ).datepicker( "option", "minDate", selectedDate );
//          }
        });
        $( "#edit-date-to" ).datepicker({
          //defaultDate: "+1w",
          changeMonth: true,
          changeYear: true,
          minDate: new Date(2013, 1, 1),
          maxDate: 'today'
          //,
          //showWeek: true,
          //firstDay: 1
//          ,
//          onClose: function( selectedDate ) {
//            $( "#edit-date-from" ).datepicker( "option", "maxDate", selectedDate );
//          }
        });
    
//        $( "#edit-time-from" ).timepicker({ 'timeFormat': 'H:i:s' });
//        $( "#edit-time-to" ).timepicker({ 'timeFormat': 'H:i:s' });
        
        $( "#edit-set-timeframe" ).change(function(event) {
          switch ($(this).val()) {
            
            case 'today':
              $('#edit-date-from').val(Drupal.settings['hr_pages']['from_today']['date']);
              $('#edit-time-from').val(Drupal.settings['hr_pages']['from_today']['time']);
              $('#edit-date-to').val(Drupal.settings['hr_pages']['to_now']['date']);
              $('#edit-time-to').val(Drupal.settings['hr_pages']['to_now']['time']);
              break;
            case 'yesterday':
              $('#edit-date-from').val(Drupal.settings['hr_pages']['from_yesterday']['date']);
              $('#edit-time-from').val(Drupal.settings['hr_pages']['from_yesterday']['time']);
              $('#edit-date-to').val(Drupal.settings['hr_pages']['from_today']['date']);
              $('#edit-time-to').val(Drupal.settings['hr_pages']['from_today']['time']);
              break;  
            case 'day':
              $('#edit-date-from').val(Drupal.settings['hr_pages']['from_day']['date']);
              $('#edit-time-from').val(Drupal.settings['hr_pages']['from_day']['time']);
              $('#edit-date-to').val(Drupal.settings['hr_pages']['from_today']['date']);
              $('#edit-time-to').val(Drupal.settings['hr_pages']['to_now']['time']);
              break;
              
            case 'week':
              $('#edit-date-from').val(Drupal.settings['hr_pages']['from_week']['date']);
              $('#edit-time-from').val(Drupal.settings['hr_pages']['from_week']['time']);
              $('#edit-date-to').val(Drupal.settings['hr_pages']['to_now']['date']);
              $('#edit-time-to').val(Drupal.settings['hr_pages']['to_now']['time']);
              break;
            
            case 'month':
              $('#edit-date-from').val(Drupal.settings['hr_pages']['from_month']['date']);
              $('#edit-time-from').val(Drupal.settings['hr_pages']['from_month']['time']);
              $('#edit-date-to').val(Drupal.settings['hr_pages']['to_now']['date']);
              $('#edit-time-to').val(Drupal.settings['hr_pages']['to_now']['time']);
              break;
            
            case 'this_month':
              $('#edit-date-from').val(Drupal.settings['hr_pages']['from_this_month']['date']);
              $('#edit-time-from').val(Drupal.settings['hr_pages']['from_this_month']['time']);
              $('#edit-date-to').val(Drupal.settings['hr_pages']['to_now']['date']);
              $('#edit-time-to').val(Drupal.settings['hr_pages']['to_now']['time']);
              break;
              
            case 'last_month':
              $('#edit-date-from').val(Drupal.settings['hr_pages']['from_last_month']['date']);
              $('#edit-time-from').val(Drupal.settings['hr_pages']['from_last_month']['time']);
              $('#edit-date-to').val(Drupal.settings['hr_pages']['from_this_month']['date']);
              $('#edit-time-to').val(Drupal.settings['hr_pages']['from_this_month']['time']);
              break;
              
            default:
              $('#edit-date-from').val('');
              $('#edit-time-from').val('');
              $('#edit-date-to').val('');
              $('#edit-time-to').val('');
              break;
          }
          console.log($(this).val());
          
        });
        
        console.log(Drupal.settings['hr_pages']);
        
    }
  };

}(jQuery));