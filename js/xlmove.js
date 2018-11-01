$(function(){
    $(".case_head_right span").click(function(){
        $(this).addClass('show_border').siblings().removeClass('show_border');
        $('.imgs_box .imgs').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })

    /* 
    var oul = $('.imgs');
    var oulHtml = oul.html();
    oul.html(oulHtml+oulHtml)
    var timeId = null;

    var ali = $('.imgs_box ul li');
    var aliWidth = ali.eq(0).width()+26;
    var aliSize = ali.length;
    var ulWidth = aliWidth*aliSize;
    oul.width(ulWidth);	

    var speed = -1;

    function slider(){

        if(speed<0){
            if(oul.css('left')==-ulWidth/2+'px'){
            oul.css('left',0);
            }
            oul.css('left','+=-2px');
        }


        if(speed>0){
            if(oul.css('left')=='0px'){
            oul.css('left',-ulWidth/2+'px');
            }
            oul.css('left','+='+speed+'px');
        }

    }
    // setInterval()函数的作用是：每隔一段时间，执行该函数里的代码
    timeId = setInterval(slider,100);

    $('.imgs').mouseover(function(){
        // clearInterval()函数的作用是用来清除定时器
        clearInterval(timeId);
    });

    $('.imgs').mouseout(function(){
        timeId = setInterval(slider,100);
    });
    
    */
})