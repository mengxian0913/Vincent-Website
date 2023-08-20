const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchResultsUL = searchResults.querySelector('ul');
let searchResultsList = new Set();
let JsonContent = [];

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
        const isMatch = pattern.test(i.title);
        if(isMatch){
            searchResultsList.add(i.url);   
        } else {
            searchResultsList.delete(i.url);
        }
    }
}


searchInput.onkeyup = function(){
    const searchText = searchInput.value;
    if(searchText != ''){
        console.log(searchText);
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