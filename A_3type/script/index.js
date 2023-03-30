$(document).ready(()=>{
    // ==nav메뉴===
    const nav=$("header .gab>ul>li");
    nav.mouseenter(()=>{
        $("header .sub").stop().slideDown();
    });
    nav.mouseleave(()=>{
        $("header .sub").stop().slideUp();
    });
    //===IMGslide=====
    // li에 걸고 슬라이드하기 
    const slideImg=$(".slide li");
    let num=0;
    setInterval(()=>{
        num<2?num++:num=0;
        slideImg.eq(num).siblings().animate({left:"-1200px"},500);
        slideImg.eq(num).animate({left:"0"},500);
    },3000);

    


});