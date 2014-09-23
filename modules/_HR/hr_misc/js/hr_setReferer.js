(function ($) {

  Drupal.behaviors.hr_setReferer = {
    attach: function (context, settings) {
      
      //if (Drupal.settings['hr_blocks']['uid']) {
        //console.log('qqqqq');
        ref = document.referrer;
        // if the refferer is not the hr itself
        if (ref.indexOf('hostingreview.org') < 0) {
          console.log('Remote referrer!');
          $.cookie('last_remote_referer', document.referrer, {
              //expires: 5,
              path: '/'
          });
        }
        else {
          console.log('Local referrer!');
        }
        
        console.log($.cookie('last_remote_referer')); // => "the_value"
      //}
      
       
       $('body').one('mouseover', function() {
          //console.log('ooooover...');
          
          (jQuery).ajax({
            
                url: '/referer', 
                data: {
                        op: 'set',
                        url: window.location.href,
                        referer: document.referrer
                       
                      }, 
                    type: 'GET', 
                    dataType: 'json'
                    /*
                    , 
                    success: function(data) 
                            { 
                                if(!data.error) {
                                    //console.log('The header is arrived!');
                                    console.log(data);
                                }
                                return false;
                            } 
                     */
            }); // end of (jQuery).ajax
        

        });


       
    }
  };

}(jQuery));
