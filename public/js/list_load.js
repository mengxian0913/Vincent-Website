let List_loading = document.querySelector("#list-load");
let Loading_h1 = List_loading.querySelector("#list-load-title");

const Loading_text = "Loading";
const Loading_dot = "...";

let loadingInProgres = true;

// delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function LoadingFunction(){
    for(let i = 0; i <= Loading_dot.length; i++){
        if(!loadingInProgres){
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
    loadingInProgres = false;
};