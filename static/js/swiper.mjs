window.addEventListener("DOMContentLoaded", function() {
    const swiperContainer = document.querySelectorAll(".swiper");
    for(let i of swiperContainer){
        const ClassList = i.classList;
        if(ClassList.length != 2){
            console.log("Your swiper shortcodes have some wrong in the vars");
        }
        
        else{
            let CurrentSwiperID = '.' +  ClassList[1];
            MakeSwiper(CurrentSwiperID);
        }
    }
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



// window.addEventListener("loadstart", function(){
//     console.log(123);
// });



// var swiperContainer = document.querySelectorAll('.swiper');

// swiperContainer.forEach(event =>{
//     var ClassList = event.classList;
//     if(ClassList.length != 2){
//         console.log("Your swiper shortcodes have some wrong in the vars");
//     }

//     else{
//         var CurrentSwiperID = '.' +  ClassList[1];
//         if(!SwiperSet.has(CurrentSwiperID)){
//             SwiperSet.add(CurrentSwiperID);
//             // MakeSwiper(CurrentSwiperID);
//         }     
//     }
// });     


// SwiperSet.forEach(event =>{
//     MakeSwiper(event);
// });


// async function MakeSwiper(SwiperID){
//     console.log(SwiperID);
//     const swiper = new Swiper(SwiperID, {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: true,

//         // If we need pagination
//         pagination: {
//             el: '.swiper-pagination',
//         },

//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },

//         // And if we need scrollbar
//         scrollbar: {
//             el: '.swiper-scrollbar',
//         },
//     });
// }
 


