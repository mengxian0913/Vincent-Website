const menu = document.querySelector('.menu');
const link1 = menu.querySelectorAll('a');
const menu2 = document.querySelector('.menu2');
const link2 = menu2.querySelectorAll('a');
const hamburger = document.querySelector('.hamburger');
const nav2_container = document.querySelector('.nav2-container');
const arrow = document.querySelector('.arrow');


let nowPosition = link1[0];
nowPosition.classList.add('is-active');



link1.forEach(function(element){
    element.addEventListener('click', function(){
        nowPosition.classList.toggle('is-active');
        nowPosition = element;
        nowPosition.classList.toggle('is-active');
    });
});


let nowPosition2 = link2[0];
nowPosition2.classList.add('is-active');
link2.forEach(function(element){
    element.addEventListener('click', function(){
        nowPosition2.classList.toggle('is-active');
        nowPosition2 = element;
        nowPosition2.classList.toggle('is-active');
        nav2_container.classList.remove('is-active');
        hamburger.classList.remove('is-active');
    });
});


link1[3].addEventListener('click', ()=>{
    circle();
})
link2[3].addEventListener('click', ()=>{
    circle();
})


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    nav2_container.classList.toggle('is-active');
})


const section = document.querySelectorAll('section');

function checkIfHitTop(){
    for(let i = 0; i < section.length; i++){
        var rect = section[i].getBoundingClientRect();
        var Top = rect.top;
        
        if(Top <= window.innerHeight * 10 / 100 || (i == section.length-1 && Top <= window.innerHeight * 95 / 100)){
            nowPosition.classList.toggle('is-active');
            nowPosition2.classList.toggle('is-active');
            nowPosition = link1[i];
            nowPosition2 = link2[i];
            nowPosition.classList.toggle('is-active');
            nowPosition2.classList.toggle('is-active');
        }

    }
}



window.addEventListener('wheel', checkIfHitTop);


arrow.addEventListener('click', function(){
    const scrollToPosition = window.innerHeight;
    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });

    circle();
})


// sec2

const circularProgress = document.querySelectorAll(".circular-progress");
const progressValue = document.querySelectorAll(".progress-value");
//parseInt(progressValue.innerHTML); 
let progressStartValue = [], progressEndValue = [];
const speed = 10;
let progress_color = "rgba(73, 175, 231, 0.777)";

for(var i=0;i<progressValue.length;i++){
    var value = parseInt(progressValue[i].innerHTML);
    progressEndValue.push(value);
    progressStartValue.push(0);
}


let MAX_Progress_Value = -1;
for(var i = 0; i<progressEndValue.length; i++){
    MAX_Progress_Value = Math.max(progressEndValue[i], MAX_Progress_Value);
}

circle();

function circle() {

    for(var i = 0; i < progressStartValue.length; i++){
        progressStartValue[i] = 0;
    }

    progress = setInterval(() => {
        for(var i = 0; i < progressStartValue.length; i++){
            if(progressStartValue[i] < progressEndValue[i]){
                progressStartValue[i]++;
            }            
            progressValue[i].textContent = `${progressStartValue[i]}%`;
            circularProgress[i].style.background = `conic-gradient(${progress_color} ${progressStartValue[i] * 3.6}deg, #ededed 0deg)`;
            
            if(progressStartValue[i] >= progressEndValue[i] && progressEndValue[i] == MAX_Progress_Value){
                clearInterval(progress);
            }
        }
    }, speed); 

    return;
}

//// nav ///

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll);

    if(currentScroll <= 0){
        body.classList.remove("scroll-up");
    }

    if(currentScroll > lastScroll  && !body.classList.contains("scroll-down")) {
        body.classList.add("scroll-down");
        body.classList.remove("scroll-up");
    }

    if(currentScroll < lastScroll  && body.classList.contains("scroll-down")) {
        body.classList.add("scroll-up");
        body.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
})