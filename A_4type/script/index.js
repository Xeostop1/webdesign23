$(document).ready(()=>{
//===메뉴 슬라이드====
const menu=$("nav .gab li");
const sub_menu=$("ul.sub, nav .nav_bg");
menu.mouseenter(()=>{
    sub_menu.stop().slideDown();
});
//====슬라이더=====
let num=0;
const slideImg=$(".slide .slide_ul li");
slideImg.eq().siblings().hide();

setInterval(()=>{
    num<2?num++:num=0;
    slideImg.eq(num).siblings().fadeOut(500);
    slideImg.eq(num).fadeIn(500);

},5000);


});