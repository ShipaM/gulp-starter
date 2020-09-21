//Функция проверяет поддерживает ли браузер webp
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});


///////////////////////////////////////////////////////////////////////


// $(function() {
//     $(".wrapper").addClass("loaded");

//     $(".icon-menu").click(function(event) {
//         $(this).toggleClass("active");
//         $(".menu__body").toggleClass("active");
//         $("body").toggleClass("lock");
//     });

//     function ibg() {
//         $.each($(".ibg"), function(index, val) {
//             if ($(this).find("img").length > 0) {
//                 $(this).css(
//                     "background-image",
//                     'url("' + $(this).find("img").attr("src") + '")'
//                 );
//             }
//         });
//     }
//     ibg();

//     if ($(".slider__body").length > 0) {
//         $(".slider__body").slick({
//             //autoplay: true,
//             //infinite: false,
//             dots: true,
//             arrows: false,
//             slidesToShow: 1,
//             autoplaySpeed: 3000,
//             adaptiveHeight: true,
//             nextArrow: '<button type="button" class="slick-next"></button>',

//             prevArrow: '<button type="button" class="slick-prev"></button>',
//             responsive: [{
//                 breakpoint: 768,
//                 settings: {},
//             }, ],
//         });
//     }
// });


// document.addEventListener("DOMContentLoaded", function() {
//             // Custom JS
//             $(".wrapper").addClass("loaded");

//             function ibg() {
//                 $.each($(".ibg"), function(index, val) {
//                     if ($(this).find("img").length > 0) {
//                         $(this).css(
//                             "background-image",
//                             'url("' + $(this).find("img").attr("src") + '")'
//                         );
//                     }
//                 });
//             }
//             ibg();

//             //.user-header__icon выпадающее меню
//             const userHeaderIcon = document.querySelector(".user-header__icon");

//             userHeaderIcon.addEventListener("click", function(e) {
//                 const userHeaderMenu = document.querySelector(".user-header__menu");

//                 userHeaderMenu.classList.toggle("_active");

//                 document.documentElement.addEventListener("click", function(e) {
//                     if (!e.target.closest(".user-header")) {
//                         const userHeaderMenu = document.querySelector(".user-header__menu");
//                         userHeaderMenu.classList.remove("_active");
//                     }
//                 });
//             });

// //menu
// const iconMenu = document.querySelector(".icon-menu");

// if (iconMenu != null) {
//     let delay = 500;
//     let body = document.querySelector("body");
//     let menuBody = document.querySelector(".menu__body");
//     iconMenu.addEventListener("click", (e) => {
//         if (!body.classList.contains("_wait")) {
//             body_lock(delay);
//             iconMenu.classList.toggle("_active");
//             menuBody.classList.toggle("_active");
//         }
//     });
// }

//     const iconMenu = document.querySelector(".icon-menu");
//     const menuBody = document.querySelector(".menu__body");
//     const body = document.querySelector("body");

//     iconMenu.addEventListener("click", function(e) {
//         iconMenu.classList.toggle("_active");
//         menuBody.classList.toggle("_active");
//         body.classList.toggle("_lock");
//     });

//     //Slider
//     if ($(".main-slider__body").length > 0) {
//         $(".main-slider__body").slick({
//             //autoplay: true,
//             //infinite: false,
//             dots: false,
//             arrows: true,
//             slidesToShow: 1,
//             autoplaySpeed: 3000,
//             adaptiveHeight: true,
//             nextArrow: ".control-main-slider__arrow_next",
//             prevArrow: ".control-main-slider__arrow_prev",
//             responsive: [{
//                 breakpoint: 768,
//                 settings: {
//                     autoHeight: false,
//                 },
//                 breakpoint: 320,
//                 settings: {
//                     autoHeight: true,
//                 },
//             }, ],
//         });
//     }
// });