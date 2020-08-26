let now = 0;
$("#home-left").on("click", ()=>{
    if(now == 0){
        return;
    }
    log("left");
    now++;
    let p =  now * 100 + "%";
    $("#home-container").css("left", p);
});

$("#home-right").on("click", ()=>{
    if(now == -5 ){
        return;
    }
    log("right");
    now--;
    let p =  now * 100 + "%";
    log(p);
    $("#home-container").css("left", p);
});