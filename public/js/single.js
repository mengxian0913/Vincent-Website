window.addEventListener('DOMContentLoaded', (event) => {      
    document.querySelectorAll('pre[class*=language-]').forEach(function(node) {
        node.classList.add('line-numbers');
    });
    Prism.highlightAll();
});


let UnloadContainer = document.querySelector(".container");
let UnloadPage = document.querySelector(".load-container");

UnloadContainer.style.height = "100vh";
UnloadContainer.style.overflow = "hidden";


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function LoadingFunction(){
    const load = document.querySelector('.load');
    const V_width = window.innerWidth;
    let width = [70, 60, 80, 80, 90];
    let height = [1.5, 2.5, 3.5, 50];

    if(V_width < 850) {
        load.style.width = "100vw";
        for(let i = 0; i < width.length; i++) {
            width[i] *= 0.8;
        }
        for(let i = 0; i < height.length; i++) {
            height[i] *= 0.9;
        }
    }


    let div_tag =  `<div></div>`;
    let object = "";

    const article = document.querySelectorAll('.article');

    for(let i = 0; i < 5; i++) {
        object += `<div style="height:${height[1]}vh; width: ${width[i]}%; background-color: grey; margin: 15px 0 15px 0; border-radius: 99px;"></div>`;
    }

    for(let i of article) {
        i.innerHTML = object;
    }

    const title = document.querySelector('.title');
    object = `<div style="width:${width[1]}%; height:${height[2]}vh; background-color: grey; margin: 15px 0 15px 0; border-radius: 99px;"></div>`;
    title.innerHTML = object;

    const img = document.querySelector('.img');
    object = `<div style="height: 30vh; width: ${height[3]}%; background-color: grey; margin: 15px 0 15px 0; border-radius: 20px;}"></div>`;
    img.innerHTML = object;    
}

LoadingFunction();


// 網站加載過後
window.addEventListener('load', function(){
    UnloadPage.style.display = "none";
    UnloadContainer.style.height = "auto";
    loadingInProgress = false;
});



const ToTopArrow = document.querySelector(".imgcontainer");
let CurrentScrollY = -1;
// 監聽網頁的滾動事件
window.addEventListener('scroll', function() {
    // 獲取目前的捲軸位置
    var scrollY = window.pageYOffset;
    // 如果捲軸位置大於0，表示正在向上滾動
    if (scrollY < CurrentScrollY && scrollY > 80) {
        ToTopArrow.style.width = "65px";
        ToTopArrow.style.height = "65px";
        ToTopArrow.style.transform =  "rotate(360deg)";
    }

    else{
        ToTopArrow.style.width = "0px";
        ToTopArrow.style.height = "0px";
        ToTopArrow.style.transform =  "rotate(-360deg)";
    }

    CurrentScrollY = scrollY;
});


ToTopArrow.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

  

