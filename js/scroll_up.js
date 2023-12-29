$(function(){
    $(window).scroll(function (){
      $(".about_inner").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("about_inner-in");
        } 
      });
    });
  });