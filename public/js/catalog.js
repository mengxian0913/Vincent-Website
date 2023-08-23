// _containerSelector = '#markdown-content';

// function generateCatalog(_selector){
//     var P = $(_containerSelector);

//     a = P.find('h1, h2, h3, h4, h5, h6');
//     $(_selector).html("");

//     a.each(function(){
//         n = $(this).prop('tagName').toLowerCase();
//         i = "#" + $(this).prop('id');
//         t = $(this).text();
//         c = $(`<a aria-label="${t}" href="${i}" rel="nofollow">${t}</a>`);
//         l = $(`<li class="${n}_nav"></li>`).append(c);
//         $(_selector).append(l);    
//     })

//     return a;
// }

// const sideElements = generateCatalog('ul.catalog-ul');

// sideElements.each((index, element) => {
//     const name = element.id
//     const innerTagsCount = 0 // 子標題數量預設為 0 
//     const sideElement = $(`[aria-label="${element.innerText}"]`) // 快速連結中的標題元素
//     const top =  $(`[id="${name}"]`).offset().top // 文章中標題位置
//     const htag = sideElement.parent();
//     const innerTags = htag.nextUntil(`[class="${htag[0].className}"]`) // 標題層級下的所有子標題元素
// })