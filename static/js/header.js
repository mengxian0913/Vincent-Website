const hamburger = document.querySelector('.hamburger');
const nav2_container = document.querySelector('.nav2-container');
const body = document.body;

const DomClickList = ['nav2-container', 'nav-container', 'hamburger', 'hamburgers', 'menu2'];

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    nav2_container.classList.toggle('is-active');
});


document.addEventListener('click', function(){
    // console.log(event.target.classList);
    let ElseAreaClick = false;
    for(let i = 0; i < DomClickList.length; i++){
        if(event.target.classList.contains(DomClickList[i])){
            ElseAreaClick = true;
            break;
        }
    }

    if(!ElseAreaClick){
        hamburger.classList.remove('is-active');
        nav2_container.classList.remove('is-active');
    }
});




//// nav ///


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