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
    // $(document).on("click",".mainArea .tableList .title",function(){
    //     $(this).closest(".listBox")
    //     .toggleClass("active");

    //     $(".mainArea .tableList .listBox").each(function(){
            
    //         if($(this).hasClass("active"))
    //         {
    //             var n = $(this).find(".tableBox").length;

    //             if(n == 1)
    //             {
    //                 $(this)
    //                 .css("height",""+ (n * 155) +"");
    //             }
    //             else
    //             {
    //                 $(this)
    //                 .css("height",""+ (n * 108 + 47) +"");
    //             }
    //         }
    //         else
    //         {
    //             $(this)
    //             .css("height","47px");
    //         }
    //     })
    // })
    $(".mainArea .tableList .title").on("click",function(){
        $(this).closest(".listBox")
        .toggleClass("active");

        $(".mainArea .tableList .listBox").each(function(){
            
            if($(this).hasClass("active"))
            {
                var n = $(this).find(".tableBox").length;

                if(n == 1)
                {
                    $(this)
                    .css("height",""+ (n * 155) +"");
                }
                else
                {
                    $(this)
                    .css("height",""+ (n * 108 + 47) +"");
                }
            }
            else
            {
                $(this)
                .css("height","47px");
            }
        })
    })

    $(".mainArea .topBtnBox button").on("click",function(){
        if($(".mainArea .tableList .listBox").hasClass("active"))
        {
            $(".mainArea .tableList .listBox")
            .removeClass("active")
            .css("height","48px");
        }
        else
        {
            $(".mainArea .tableList .listBox")
            .addClass("active");

            $(".mainArea .tableList .listBox").each(function(){

                var n = $(this).find(".tableBox").length;

                if(n == 1)
                {
                    $(this)
                    .css("height",""+ (n * 155) +"");
                }
                else
                {
                    $(this)
                    .css("height",""+ (n * 108 + 47) +"");
                }
            })
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

//chatroom
$(function(){
    $(".chatroom textarea").keydown(function(event){
        if(event.which == 13)
        {
            var n = $(".chatroom textarea").val();

            $(".chatroom .chatArea")
            .append("<div class='cus'><p>"+ n +"</p></div>");

            $(".chatroom textarea")
            .val("");
        }
    })

    $(".chatroom .title").on("click",function(){
        $(this).closest(".chatroom")
        .toggleClass("active");
    })
})

//切換css
$(function(){
    $("header .left .btnBox button").on("click",function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        if(n == 0)
        {
            $(".cssList")
            .attr("href","./css/style.css");
        }
        else if(n == 1)
        {
            $(".cssList")
            .attr("href","./css_darkblue/style.css");
        }
        else if(n == 2)
        {
            $(".cssList")
            .attr("href","./css_pink/style.css");
        }
    })
})