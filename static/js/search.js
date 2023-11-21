const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchResultsUL = searchResults.querySelector('ul');
let searchResultsList = new Set();
let JsonContent = [];


const searchButton = document.querySelector('.header-search');
const searchcontainer = document.querySelector('.search-background');
const searchchancelbox = document.querySelector('.fa-xmark');
const matteBackground = document.querySelector('#matte-background');

function SetBodyHeight(){
    if(searchcontainer.classList.contains('is-active')){
        document.body.style.position = "fixed";
    }

    else{
        document.body.style.position = "static";
        searchInput.value = '';
        searchResultsList.clear();
    }
}

searchButton.addEventListener('click', function(){
    searchcontainer.classList.toggle('is-active');
    matteBackground.classList.toggle('is-active');
    SetBodyHeight();
});

searchchancelbox.addEventListener('click', function(){
    searchcontainer.classList.remove('is-active');
    matteBackground.classList.remove('is-active');
    SetBodyHeight();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.code === 'Escape') {
        // 在這裡處理按下 `Esc` 鍵的情況
        searchcontainer.classList.remove('is-active');
        matteBackground.classList.remove('is-active');
        SetBodyHeight();
    }
});

fetch('/json/posts.json')
    .then(response => response.json())
    .then(data => {
        for(let i of data){
            JsonContent.push(i);
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));
///

function MatchWords(words){

    const pattern = new RegExp(words, "gi");
    for(let i of JsonContent){
        const isMatchTitle = pattern.test(i.title);
        let isMatchTags = false;
        if(i.tags != null) {
            for(let j of i.tags) {
                if(pattern.test(j)) {
                    isMatchTags = true;
                    break;
                }
            }
        }

        if(isMatchTitle || isMatchTags){
            searchResultsList.add(i.url);   
        } else {
            searchResultsList.delete(i.url);
        }
    }
}


searchInput.onkeyup = function(){
    const searchText = searchInput.value;
    if(searchText != ''){
        // console.log(searchText);
        MatchWords(searchText);   
    }
    
    else{
        searchResultsList.clear();
    }   

    // 在這裡可以根據 searchResultsList 的內容生成最終 HTML
    const searchResultsHTML = Array.from(searchResultsList)
        .map(url => `<li><a href="${url}">${JsonContent.find(item => item.url === url).title}</a></li>`)
        .join('');
    
    searchResultsUL.innerHTML = searchResultsHTML;
}