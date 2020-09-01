$("#model-top-menu > li").on("click", (e)=>{
    let name = $(e.target).attr("name");
    $("html").animate({scrollTop : $("#"+name).offset().top-50}, 400);
});

// $(".model-box > img").on("click", (e)=>{
//     let src = e.target.src;
//     $(".model-profile-img").attr("src", src);
// });
// let l = $(".model-box > img").length;
// $(".model-profile-right").on("click", (e)=>{
//     let n = $(".model-profile-img").attr("src").split("img/")[1].split("/")[1].split(".")[0];
//     if(n == 6){
//         n = 0;
//     }
//     n++;
//     let src = "/img/" +$(".model-profile-img").attr("src").split("img/")[1].split("/")[0] + "/" + n+".jpg";
//     log(src);
//     $(".model-profile-img").attr("src", src);
// });
// $(".model-profile-left").on("click", (e)=>{
//     let n = $(".model-profile-img").attr("src").split("img/")[1].split("/")[1].split(".")[0];
//     if(n == 1){
//         n = 6;
//     }
//     n--;
//     let src = "/img/" +$(".model-profile-img").attr("src").split("img/")[1].split("/")[0] + "/" + n+".jpg";
//     $(".model-profile-img").attr("src", src);
// });

$(".model-gallery-box > div").on("click", (e)=>{
    let img = $(e.target)[0];
    log(img.src);
    makePopUp(img.src);
});

function makePopUp(img){
    let div = document.createElement("div"); 
    div.classList.add("pop-up-all")
    div.innerHTML = `
        <div class="pop-up-back"></div>
        <div class="pop-up-show">
            <img src="${img}">
        </div>
    `;
    div.querySelector(".pop-up-back").addEventListener("click", ()=>{
        log("a");
        $(".pop-up-all").remove();
    });
    $("body").append(div);
}