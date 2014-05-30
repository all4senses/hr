(function ($) {

  Drupal.behaviors.hr_tablePfilter = {
    attach: function (context, settings) {
        
        var price = 0;
        console.log('Initiate filter...');
        
        
        $("#p_filter").change(function() {
          console.log('On change...');
          console.log($(this).val());
          // Works
          //alert( this.value ); // or $(this).val()
          
//          $( "tr" ).each(function( index ) {
//            console.log(index);
//            console.log(this);
//          });
          
          switch ($(this).val()) {
              case "Top 5": console.log("a1"); break;
              case "Best Refund": console.log("a2"); break;
              case "Worst Refund": console.log("a3"); break;
              
              case "Best Under $3": 
                console.log("a4"); 
                
                $( ".view-id-providers tbody tr" ).each(function( index ) {
                  if (index) {
                    console.log('index #' + index);
                    //console.log(this);
                    
                    price = $(this).find("td.views-field-php-2").html();
                    if (price) {
                      price = price.replace('$','')
                      console.log('price = ' + price);

                      if (price < 3) {
                        console.log(price + ' is less than 3');
                      }
                      else {
                        console.log(price + ' is more than 3');
                      }
                    }
                  }
                });
                
                break;
                
                
              case "Best Under $4": 
                console.log("a5"); 
                
                $( ".view-id-providers tbody tr" ).each(function( index ) {
                  if (index) {
                    console.log('index #' + index);
                    //console.log(this);
                    
                    price = $(this).find("td.views-field-php-2").html().replace('$','');
                    
                    console.log('price = ' + price);
                    
                    if (price < 4) {
                      console.log(price + ' is less than 4');
                    }
                    else {
                      console.log(price + ' is more than 4');
                    }
                  }
                });
                
                break;
                
                
              
              default: 
                console.log("default"); 
                break;;
          }
        
        });
       
         
//        $( "tr" ).each(function( index ) {
//          console.log(index);
//        });
          
        
    }
  };

}(jQuery));