$(document).ready(()=>{
    //====메뉴바 네비게이션=====
    //마우스가 들어왔을 때 
    $("header nav ul.gnb>li").mouseenter(()=>{
        //우선멈추고 시작
        $("header nav .nav_bg, header nav ul.gnb>li>ul.sub").stop().slideDown();
    });

    //마우스가 떠났을 때
    $("header nav ul.gnb>li").mouseleave(()=>{
        $("header nav .nav_bg, header nav ul.gnb>li>ul.sub").stop().slideUp();
    });

    //=====슬라이드 이미지=====
    //반복에 setInterval 사용
    let slidenum=0;
    setInterval(()=>{
        //2보다 작으면 ++ 아니면 0으로 초기화
        slidenum<2?slidenum++:slidenum=0;
        //슬라이드li가 위의 변수와 같다면 sinlings(형제들)은 left -1200으로 움직임
        $("ul.slide li").eq(slidenum).siblings().animate({left:"-1200px"}, 500);
        //슬라이드li가 위의 변수와 같다면 움직인다 left 0 으로 0.5초 마다
        $("ul.slide li").eq(slidenum).animate({left:"0"}, 500);
    },3000);

});//ready