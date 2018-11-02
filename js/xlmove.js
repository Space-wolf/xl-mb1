$(function(){
    $(".case_head_right span").click(function(){
        $(this).addClass('show_border').siblings().removeClass('show_border');
        $('.imgs_box .imgs').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })

     
    
    
    
})