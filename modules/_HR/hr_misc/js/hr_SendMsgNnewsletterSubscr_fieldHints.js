(function ($) {

  Drupal.behaviors.hr_SendMsgNnewsletterSubscr_fieldHints = {
    attach: function (context, settings) {
      
      //$('#block-hr_blocks-send_msg_n_subscribe input[id="edit-fname"], #block-hr_blocks-send_msg_n_subscribe input[id="edit-lname"], #block-hr_blocks-send_msg_n_subscribe input[id="edit-email"], #block-hr_blocks-send_msg_n_subscribe textarea[id="edit-message"]').each(function(){
      $('#block-hr-blocks-send-msg-n-subscribe input[id="edit-fname"], #block-hr-blocks-send-msg-n-subscribe input[id="edit-lname"], #block-hr-blocks-send-msg-n-subscribe input[id="edit-email"], #block-hr-blocks-send-msg-n-subscribe textarea[id="edit-message"]').each(function(){
        if ($(this).val() == '') {
          $(this).val($(this).attr('title'));
          $(this).addClass('blur');
        }
        else if ($(this).val() == $(this).attr('title')) {
          $(this).addClass('blur');
        }
      });
      
      //$('#block-hr_blocks-send_msg_n_subscribe input[id="edit-fname"], #block-hr_blocks-send_msg_n_subscribe input[id="edit-lname"], #block-hr_blocks-send_msg_n_subscribe input[id="edit-email"], #block-hr_blocks-send_msg_n_subscribe textarea[id="edit-message"]').focus(function(){
      $('#block-hr-blocks-send-msg-n-subscribe input[id="edit-fname"], #block-hr-blocks-send-msg-n-subscribe input[id="edit-lname"], #block-hr-blocks-send-msg-n-subscribe input[id="edit-email"], #block-hr-blocks-send-msg-n-subscribe textarea[id="edit-message"]').focus(function(){        
        if ($(this).val() == $(this).attr('title')) {
          $(this).val('');
          $(this).removeClass('blur');
        }
        
      });
      
      //$('#block-hr_blocks-send_msg_n_subscribe input[id="edit-fname"], #block-hr_blocks-send_msg_n_subscribe input[id="edit-lname"], #block-hr_blocks-send_msg_n_subscribe input[id="edit-email"], #block-hr_blocks-send_msg_n_subscribe textarea[id="edit-message"]').blur(function(){
      $('#block-hr-blocks-send-msg-n-subscribe input[id="edit-fname"], #block-hr-blocks-send-msg-n-subscribe input[id="edit-lname"], #block-hr-blocks-send-msg-n-subscribe input[id="edit-email"], #block-hr-blocks-send-msg-n-subscribe textarea[id="edit-message"]').blur(function(){
        
        if ($(this).val() == '') {
          $(this).val($(this).attr('title'));
          $(this).addClass('blur');
        }
        
      });
      
    }
  };

}(jQuery));