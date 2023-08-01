const hamburger = document.querySelector('.hamburger');
const nav2_container = document.querySelector('.nav2-container');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    nav2_container.classList.toggle('is-active');
})

