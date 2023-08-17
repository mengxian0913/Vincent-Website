window.addEventListener('DOMContentLoaded', (event) => {      
    document.querySelectorAll('pre[class*=language-]').forEach(function(node) {
        node.classList.add('line-numbers');
    });
    Prism.highlightAll();
});


let UnloadContainer = document.querySelector(".container");
let UnloadPage = document.querySelector(".load");

UnloadContainer.style.height = "100vh";
UnloadContainer.style.overflow = "hidden";

let Loading_h1 = UnloadPage.querySelector("h1");
const Loading_text = "Loading";
const Loading_dot = [".", "..", "..."];

let loadingInProgress = true;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function LoadingFunction(){
    for(let i = 0; i <= Loading_dot.length; i++){
        if(!loadingInProgress){
            break;
        }
        i %= Loading_dot.length;
        await delay(200);
        
        let NowText = Loading_text + Loading_dot[i];
        Loading_h1.innerHTML = NowText;
    }

    return;
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

  

