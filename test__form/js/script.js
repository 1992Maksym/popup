$(document).ready(function(){
    $('.popup-btn').on('click', function(event){
        event.preventDefault();
        $('.popup').fadeIn();
    })
    $('.popup-close').on('click', function(event){
        event.preventDefault();
        $('.popup').fadeOut(); 
    });


});

    // new WOW().init();

    jQuery(function($){
        $("#phone").mask("+38(999) 999-99-99");
        $("#phone_1").mask("+38(999) 999-99-99");
        $("#phone_2").mask("+38(999) 999-99-99");
        $("#phone_3").mask("+38(999) 999-99-99");
    });



