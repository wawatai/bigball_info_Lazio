//header
$(function(){
    $("header .memberList").on("click",function(){
        $(this).find("ul")
        .toggleClass("display");
    })

    $("header .lang").on("click",function(){
        $(this).find("ul")
        .toggleClass("display");
    })
})

//mainArea高度
$(function(){
    var th = $('.mainArea');
    var wh = window.innerHeight;
    th.css("height", (String(wh - 325) + "px"));

    $(window).resize(function () {
        var th = $('.mainArea');
        var wh = window.innerHeight;
        th.css("height", (String(wh - 325) + "px"));
    });
});

//mainArea table展開
$(function(){
    $(".mainArea .tableList .title").on("click",function(){
        $(this).closest(".listBox")
        .toggleClass("active");
    })

    $(".mainArea .topBtnBox button").on("click",function(){
        if($(".mainArea .tableList .listBox").hasClass("active"))
        {
            $(".mainArea .tableList .listBox")
            .removeClass("active");
        }
        else
        {
            $(".mainArea .tableList .listBox")
            .addClass("active");
        }
    })
})

//nav
$(function(){
    $("nav li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})