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

$(function () {
    var th = $('.mainArea');
    var wh = window.innerHeight;
    th.css("height", (String(wh - 335) + "px"));

    $(window).resize(function () {
        var th = $('.mainArea');
        var wh = window.innerHeight;
        th.css("height", (String(wh - 335) + "px"));
    });
});