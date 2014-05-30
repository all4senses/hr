(function ($) {

  Drupal.behaviors.hr_tablePfilter = {
    attach: function (context, settings) {
        
        var data = 0;
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
                
              case "Best Refund": 
                console.log("a2"); 
                
                $( ".view-display-id-block_top_wp_p_table tbody tr, .view-display-id-block_h_top_sh_table tbody tr" ).each(function( index ) {

                    console.log('index #' + index);
                    //console.log(this);
                    
                    data = $(this).find("td.views-field-php-6").html().trim();
                    console.log('Refund = <' + data + '>');
                    if (data && data == 'Anytime') {
                      $(this).removeClass('hidden');
                    }
                    else {
                      $(this).addClass('hidden');
                    }
                });
                
                break;
              
              
              
              
              case "Worst Refund": 
                console.log("a3"); 
                
                $( ".view-display-id-block_top_wp_p_table tbody tr, .view-display-id-block_h_top_sh_table tbody tr" ).each(function( index ) {

                    console.log('index #' + index);
                    //console.log(this);
                    
                    data = $(this).find("td.views-field-php-6").html().trim();
                    console.log('Refund = <' + data + '>');
                    if (data && data == '30 Days') {
                      $(this).removeClass('hidden');
                    }
                    else {
                      $(this).addClass('hidden');
                    }
                });
                
                break;
                
                
              
              case "Best Under $3": 
                console.log("a4"); 
                
                $( ".view-display-id-block_top_wp_p_table tbody tr, .view-display-id-block_h_top_sh_table tbody tr" ).each(function( index ) {
                  //if (index) 
                  {
                    console.log('index #' + index);
                    //console.log(this);
                    
                    data = $(this).find("td.views-field-php-2").html();
                    if (data) {
                      
                      data = data.replace('$','');
                      data = data.replace('<div class="data month non-crossed">','');
                      data = data.replace('</div>','');
                      
                      console.log('data = ' + data);

                      if (data < 3) {
                        console.log(data + ' is less than 3');
                        $(this).removeClass('hidden');
                      }
                      else {
                        console.log(data + ' is more than 3');
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
                    
                    data = $(this).find("td.views-field-php-2").html().replace('$','');
                    
                    console.log('data = ' + data);
                    
                    if (data < 4) {
                      console.log(data + ' is less than 4');
                      $(this).removeClass('hidden');
                    }
                    else {
                      console.log(data + ' is more than 4');
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