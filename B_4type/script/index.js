$(document).ready(()=>{
    // ===메뉴 슬라이드
    const menu=$("nav .gab>li>a");
    const submenu=$("nav .gab li ul.sub ");
    menu.mouseenter(()=>{
        submenu.stop().slideDown();
    });
    menu.mouseleave(()=>{
        console.log(`check`);
        submenu.stop().slideUp();
    })

    let num=0;
});