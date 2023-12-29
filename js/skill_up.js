$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
                $(function(){
                    $('.fadein').each(function(i){
                        $(this).delay(i * 200).queue(function(){
                            $(this).addClass('active');
                        });
                    });
                });
            }
        });
    });
});	