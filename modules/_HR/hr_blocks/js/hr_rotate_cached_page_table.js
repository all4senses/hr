(function ($) {

  Drupal.behaviors.hr_rotate_cached_page_table = {
    attach: function (context, settings) {

        
        //console.log('hr_rotate_cached_page_table...');
        //console.log(Drupal.settings['hr_blocks']['hr_current_top_positions_counter']); 
//        temp = Drupal.settings['hr_blocks']['hr_current_top_positions_counter'];
//        if (Drupal.settings['hr_blocks']['hr_current_top_positions_counter']) {
//            ;
//        }

    ////return;

    ////$('body').one('mouseover', function() {
        //console.log('ooooover...');

        (jQuery).ajax({
            
                url: '/update-cached-homepage-ajax', 
                data: {
                        //op: 'set',
                        url: window.location.href,
                        //referer: document.referrer
                       
                      }, 
                    type: 'GET', 
                    dataType: 'json'
                    /*
                    , 
                    success: function(data) 
                            { 
                                if(!data.error) {
                                    console.log('The header is arrived!');
                                    //console.log(data);
                                }
                                return false;
                            } 
                     */
            }); // end of (jQuery).ajax
        
        ////}); // End of hover 
      
      
    }
  };

}(jQuery));