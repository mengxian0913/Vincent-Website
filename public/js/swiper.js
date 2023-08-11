var swiperContainer = document.querySelectorAll('.swiper');

swiperContainer.forEach(event =>{
    var ClassList = event.classList;
    if(ClassList.length != 2){
        console.log("Your swiper shortcodes have some wrong in the vars");
    }

    var CurrentSwiperID = '.' +  ClassList[1];
    if(!SwiperSet.has(CurrentSwiperID)){
        SwiperSet.add(CurrentSwiperID);
        // MakeSwiper(CurrentSwiperID);
    }
});     


SwiperSet.forEach(event =>{
    MakeSwiper(event);
});


async function MakeSwiper(SwiperID){
    console.log(SwiperID);
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


