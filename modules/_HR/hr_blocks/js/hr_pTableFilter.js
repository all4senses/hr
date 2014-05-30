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
            
              case "All": 
                console.log("Show All"); 
                
                $( ".view-display-id-block_top_wp_p_table tbody tr, .view-display-id-block_h_top_sh_table tbody tr" ).each(function( index ) {

                    console.log('index #' + index);
                    //console.log(this);
                    $(this).removeClass('hidden');
                    
                });
                break;
                
                
              case "Top 5": 
                console.log("a1"); 
                
                $( ".view-display-id-block_top_wp_p_table tbody tr, .view-display-id-block_h_top_sh_table tbody tr" ).each(function( index ) {
                  
                  console.log('index #' + index);
                  if (index > 4) 
                  {
                    
                    $(this).addClass('hidden');
                    console.log('Added from ' + index);
                  }
                  else {
                    $(this).removeClass('hidden');
                    console.log('Removed from ' + index);
                  }
  
                });
                
                
                break;
                
              case "Best Refund": console.log("a2"); break;
              case "Worst Refund": console.log("a3"); break;
              
              case "Best Under $3": 
                console.log("a4"); 
                
                $( ".view-display-id-block_top_wp_p_table tbody tr, .view-display-id-block_h_top_sh_table tbody tr" ).each(function( index ) {
                  //if (index) 
                  {
                    console.log('index #' + index);
                    //console.log(this);
                    
                    price = $(this).find("td.views-field-php-2").html();
                    if (price) {
                      
                      price = price.replace('$','');
                      price = price.replace('<div class="price month non-crossed">','');
                      price = price.replace('</div>','');
                      
                      console.log('price = ' + price);

                      if (price < 3) {
                        console.log(price + ' is less than 3');
                        $(this).removeClass('hidden');
                      }
                      else {
                        console.log(price + ' is more than 3');
                        $(this).addClass('hidden');
                      }
                    }
                  }
                });
                
                break;
                
                
              case "Best Under $4": 
                console.log("a5"); 
                
                $( ".view-display-id-block_top_wp_p_table tbody tr, .view-display-id-block_h_top_sh_table tbody tr" ).each(function( index ) {
                  if (index) {
                    console.log('index #' + index);
                    //console.log(this);
                    
                    price = $(this).find("td.views-field-php-2").html().replace('$','');
                    
                    console.log('price = ' + price);
                    
                    if (price < 4) {
                      console.log(price + ' is less than 4');
                      $(this).removeClass('hidden');
                    }
                    else {
                      console.log(price + ' is more than 4');
                      $(this).addClass('hidden');
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