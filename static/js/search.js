var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/posts', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    // 在这里处理数据并实现搜索功能
  }
};
xhr.send();




const searchInput = document.getElementById('searchInput');



searchInput.onkeyup = function(){
    const searchText = searchInput.value;
    console.log(searchText);
}