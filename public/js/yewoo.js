// 예우 엔터테인먼트 페이지

// 메뉴 클릭 이동
$(".yewoo-menu-1").on("click",(e)=>{
    $("html").animate({scrollTop : $("#yewoo-1").offset().top-100}, 400);
});
$(".yewoo-menu-2").on("click",(e)=>{
    $("html").animate({scrollTop : $("#yewoo-2").offset().top-100}, 400);
});
$(".yewoo-menu-3").on("click",(e)=>{
    $("html").animate({scrollTop : $("#yewoo-3").offset().top-100}, 400);
});
$(".yewoo-menu-4").on("click",(e)=>{
    $("html").animate({scrollTop : $("#yewoo-4").offset().top-100}, 400);
});

// 맨 아래 버튼 클릭 이동
$("#down-btn").on("click", ()=>{
    $("html, body").animate({ scrollTop: $(document).height()-$(window).height()}, 400);
});