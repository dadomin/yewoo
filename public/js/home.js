let now = 0;
$(".main-slide-left").on("click", ()=>{
    if(now == 0){
        return;
    }
    log("left");
    now++;
    let p =  now * 100 + "%";
    // $("#main-slide").css("left", p);
    $("#main-slide").animate({left : p}, 600, "linear");
});

$(".main-slide-right").on("click", ()=>{
    if(now == -1 ){
        return;
    }
    log("right");
    now--;
    let p =  now * 100 + "%";
    log(p);
    // $("#main-slide").css("left", p);
    $("#main-slide").animate({left : p}, 600, "linear");
});