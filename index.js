$(function(){
    $('.btn').click(function(e){ 
        $('.popup').addClass('hienpopup');
    }); 
    $('.cancle').click(function(e){ 
        $('.popup').removeClass('hienpopup');
    }); 
    var close=setInterval(function(){
        $('.popup').removeClass('hienpopup');
        clearInterval(close);
    },2000);
});