const header = document.querySelector("header");
const menu = document.querySelector("#menu");

//Alto elementos
let vh=window.innerHeight*0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);  


window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(".ver-mas").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

//Cambio header
window.addEventListener('scroll', cambioHeader);

let lastScroll = 0;

function cambioHeader(){
    const currentScroll = window.scrollY;
    if (currentScroll == 0) {
        header.classList="header";
        header.style="transition:ease 0.5s";
        return;
    }
    if (currentScroll > lastScroll) {
        header.classList="header scroll-down";
    }else if (currentScroll < lastScroll){
        header.classList="header scroll-up";
        header.style="transition:ease 0.5s";
    }
    if(document.querySelector(".ver-mas") != null){
        if (currentScroll > 143) {
            document.querySelector(".ver-mas").style.visibility="hidden";
        }
        else
        {
            document.querySelector(".ver-mas").style.visibility="visible";
        }
    }
    lastScroll=currentScroll;
}



/*
var mc = new Hammer.Manager(menu);

mc.add(new Hammer.Swipe({
  direction: Hammer.DIRECTION_UP
}));

mc.on('swipeup', function (ev) {
    console.log(ev.type);
    cerrarMenu()
});

function cerrarMenu(){
    if(this.iconoMenu=="icon fas fa-bars"){
        iconoMenu.classList="icon fas fa-bars";
        menu.classList="cerrarMenu";
    }
}*/