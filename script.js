let buttonOpen = document.querySelector(".main__menu-open")
let buttonClose = document.querySelector(".nav__nav-close_mobile")
let menu = document.querySelector(".nav")
let overlay = document.querySelector(".main__overlay")

buttonOpen.onclick = function(){
    menu.style.transform = "translateX(0)"
    overlay.style.transform = "translateX(0)"

}

buttonClose.onclick = function(){
    menu.style.transform = "translateX(-100%)"
    overlay.style.transform = "translateX(-100%)"

}



// sliders

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });
