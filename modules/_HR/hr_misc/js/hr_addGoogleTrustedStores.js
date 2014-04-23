(function ($) {

  Drupal.behaviors.hr_addGoogleTrustedStores = {
    attach: function (context, settings) {
       
      console.log('hr_addGoogleTrustedStores');
       
       
      // <!-- BEGIN: Google Trusted Stores -->
      
      var gts = gts || [];

      gts.push(["id", "176821"]);

      gts.push(["locale", "PAGE_LANGUAGE"]);
      gts.push(["google_base_offer_id", "ITEM_GOOGLE_SHOPPING_ID"]);
      gts.push(["google_base_subaccount_id", "ITEM_GOOGLE_SHOPPING_ACCOUNT_ID"]);

      gts.push(["google_base_country", "ITEM_GOOGLE_SHOPPING_COUNTRY"]);
      gts.push(["google_base_language", "ITEM_GOOGLE_SHOPPING_LANGUAGE"]);


      (function() {
        var scheme = (("https:" == document.location.protocol) ? "https://" : "http://");
        var gts = document.createElement("script");
        gts.type = "text/javascript";

        gts.async = true;
        gts.src = scheme + "www.googlecommerce.com/trustedstores/gtmp_compiled.js";
        var s = document.getElementsByTagName("script")[0];

        s.parentNode.insertBefore(gts, s);
      })();

      // <!-- END: Google Trusted Stores -->
  
  
       
    }
  };

}(jQuery));
