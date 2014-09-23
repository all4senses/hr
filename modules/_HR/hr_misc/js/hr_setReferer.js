(function ($) {

  Drupal.behaviors.hr_setReferer = {
    attach: function (context, settings) {
       
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
