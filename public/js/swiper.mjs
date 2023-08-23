$(document).ready(function() {
    const swiperContainers = $(".swiper");
    
    swiperContainers.each(function() {
        const classList = $(this).attr("class").split(" ");
        if (classList.length !== 2) {
            console.log("Your swiper shortcodes have some wrong in the vars");
        } else {
            let currentSwiperID = "." + classList[1];
            MakeSwiper(currentSwiperID);
        }
    });
});

async function MakeSwiper(SwiperID){

    const swiper = new Swiper(SwiperID, {
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
}