$(function(){
    // NAV
    var nav = $(".nav");

    nav.on("mouseover", function(){
        nav.find(".subnav>ul").stop(true).slideDown(200);
    }).on("mouseout", function(){
        nav.find(".subnav>ul").stop(true).slideUp(200);
    });
        
    // SLIDES 
    var $slide = $(".slide");
    var count = $slide.length;
    var index = 0;

    $slide.eq(index).stop(true).fadeIn(300);
    function slide(){
        $interval = setInterval(function(){
            slideAct();
        }, 3000);
    }
    function slideAct(){
        var next = (index + 1) % count;
        $slide.eq(index).stop(true).fadeOut(300);
        $slide.eq(next).stop(true).fadeIn(300);
        index = next;
    }
    slide();

    // TABS
    var tabs = $(".tabs>ul>li");
    tabs.on("click", function(){
        tabs.removeClass("active").find("ul").fadeOut(300);
        $(this).addClass("active").find("ul").stop(true).fadeIn(300);
    });

    // POPUP
    var popup = $(".popup");
    var btn = popup.find(".btn");

    $(".notice>ul>li").on("click", function(){
        popup.stop(true).fadeIn(200);
    });
    btn.on("click", function(){
        popup.stop(true).fadeOut(200);
    });
});