fetch('/data/posts.json')
    .then(response => response.json())
    .then(data => {
        const posts = data;
        console.log(posts[0].title);
    })
    .catch(error => console.error('Error fetching JSON:', error));



const searchInput = document.getElementById('searchInput');



searchInput.onkeyup = function(){
    const searchText = searchInput.value;
    console.log(searchText);
}