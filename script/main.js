$(function(){
    $('body').fadeIn(500);
    
    $('#burger-nav i').on('click', function(){
        $('#main-nav, aside').toggleClass('open')
    });
    
});
