let UnloadContainer = document.querySelector(".container");
let UnloadPage = document.querySelector(".load");

UnloadContainer.style.height = "100vh";
UnloadContainer.style.overflow = "hidden";

let Loading_h1 = UnloadPage.querySelector("h1");
const Loading_text = "Loading";
const Loading_dot = "...";

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
        
        let NowText = Loading_text + Loading_dot.substring(0, i + 1);
        Loading_h1.innerHTML = NowText;
    
    }
    return;
}

LoadingFunction();


// 網站加載過後
window.onload = function() {
    UnloadPage.style.display = "none";
    UnloadContainer.style.height = "auto";
    loadingInProgress = false;
};