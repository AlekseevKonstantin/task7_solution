$(document).ready(function(){
  
  /* default checkbox */

  $('.custom-switch').each(function(){
    var input = $(this).find('input');
    var slider = $(this).find('.custom-switch-slider');

    if($(input).attr('checked')){

      $(this).addClass('active');
      $(slider).addClass('active');
      $(input).attr('checked', true);
    }
  });

  $('.custom-switch').on('click', function(){

    var input = $(this).find('input');
    var slider = $(this).find('.custom-switch-slider');

    if(!$(input).attr('checked')){
      $(this).addClass('active');
      $(slider).addClass('active');
      $(input).attr('checked', true);
    }else{
      $(this).removeClass('active');
      $(slider).removeClass('active');
      $(input).attr('checked', false);
    }
  });


  function parseField(value){
    if(!/^[+-_]?\d+$/gi.test(value)){
        return value.replace(/[a-zA-Z]+/gi,'');
    }
  }

  $('#phoneNum').keyup(function(){
    $(this).val(parseField($(this).val()));
  });
  
});