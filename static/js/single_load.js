function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function LoadingFunction(){
    const load = document.querySelector('#single-load-container');
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