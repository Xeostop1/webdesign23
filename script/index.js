$(document).ready(()=>{
    //마우스가 들어왔을 때 
    $("header nav ul.gnb>li").mouseenter(()=>{
        //우선멈추고 시작
        $("header nav .nav_bg, header nav ul.gnb>li>ul.sub").stop().slideDown();
    });

    //마우스가 떠났을 때
    $("header nav ul.gnb>li").mouseleave(()=>{
        $("header nav .nav_bg, header nav ul.gnb>li>ul.sub").stop().slideUp();
    });


});//ready