// drawer
$(function() {

  $('.drawer').drawer()


// scroll
  $('a[href^="#"]').click(function() {
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top - header;
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });


  // wow
  new WOW().init()


  // googleform
  let $form = $ ( '#js-form' )
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $ ( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理
          $form.slideUp()
          $ ( '#js-error' ).slideDown() 
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on( 'change', function(){
    if(
      $( '#js-form input[type="text"]' ).val() !== "" &&
      $( '#js-form input[type="email"]' ).val() !== "" &&
      $( '#js-form input[name="entry.1355378439"]' ).prop( 'checked' ) === true
    ){
      $submit.prop( 'disabled', false )
      $submit.addClass( '-active' )
  }else{
      $submit.prop( 'disabled', true )
      $submit.removeClass( '-active' )
  }
  })


})
