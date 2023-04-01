$(document).ready(()=>{
    // ==nav메뉴===
    const nav=$("header .gab>ul>li");
    nav.mouseenter(()=>{
        $("header .sub").stop().slideDown();
    });
    nav.mouseleave(()=>{
        $("header .sub").stop().slideUp();
    });
    //===IMGslide===== 페이드인 페이드 아웃 사용 
    // li에 걸고 슬라이드하기 
    const slideImg=$(".slide li");
    slideImg.eq().siblings().hide();
    let num=0;
    setInterval(()=>{
        num<2?num++:num=0;
        slideImg.eq(num).siblings().fadeOut();
        slideImg.eq(num).fadeIn();
        
    },3000);

    


});