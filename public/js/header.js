const hamburger = document.querySelector('.hamburger');
const nav2_container = document.querySelector('.nav2-container');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    nav2_container.classList.toggle('is-active');
})

//// nav ///

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    
    if(!hamburger.classList.contains("is-active")){
        const currentScroll = window.pageYOffset;

        if(currentScroll <= 0){
            body.classList.remove("scroll-up");
        }

        else{
            if(currentScroll > lastScroll  && !body.classList.contains("scroll-down")) {
                body.classList.add("scroll-down");
                body.classList.remove("scroll-up");
            }
        
            if(currentScroll < lastScroll  && body.classList.contains("scroll-down")) {
                body.classList.add("scroll-up");
                body.classList.remove("scroll-down");
            }
        }
        
        lastScroll = currentScroll;
    }
})