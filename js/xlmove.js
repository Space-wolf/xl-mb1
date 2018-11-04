$(function(){
    $(".pro_list_tits span").click(function(){
        $(this).addClass('protit_bg').siblings().removeClass('protit_bg');
        $('.probox .pro_item').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })

     
    
    
    
})