$(document).ready(function() {
    if(!window.scrollY==0){
        $(".header").addClass("on-nav-header");
        $(".logo-header").css("top", "1rem");
    }
    window.addEventListener("scroll", function(){
        if(!window.scrollY==0){
            $(".header").addClass("on-nav-header");
            $(".logo-header").css("top", "1rem");
        }
        else {
            $(".header").removeClass("on-nav-header");
            $(".logo-header").css("top", "2rem");
            scroller = true;
        }
    });
    //RESPONSIVE NAVBAR BTN --
    var opened = false;
    $('.header-mobile').click(function() {
        if(!opened) {
            opened = true;
            $('.header-btn').css('width', '85px');
            $('.header-btn').css('height', '85px');
            $('.header-btn').css('margin', '10px');
            // $('.hidden-navbar').css('display', 'flex');
            $('.hidden-navbar').animate({top: '0px'}).delay(300);
        } else {
            opened = false;
            $('.header-btn').css('width', '110px');
            $('.header-btn').css('height', '110px');
            $('.header-btn').css('margin', '0px');
            $('.hidden-navbar').animate({top: '-300px'});
        }
        
    });
    // var scroller = true;
    // $(window).scroll(function() {
        
    //     // if($(window).scrollTop() < 900 && scroller == false){
    //     //     $('html, body').animate({
    //     //         scrollTop: 0
    //     //     }, 200);
    //     // }

    //     if($(window).scrollTop() > 100 && scroller == true){
    //         $('html, body').animate({
    //             scrollTop: $("#presentation").offset().top-130
    //         }, 100);
    //         scroller = false;
    //     }
    // });
});
