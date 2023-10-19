function generateCatalog(selector) {

    _containerSelector = '#markdown-content'

    // init
    let P = $(_containerSelector), a, n, t, l, i, c;
    a = P.find('h1,h2,h3,h4,h5,h6');

    // clean
    $(selector).html('')

    // appending
    a.each(function () {
        n = $(this).prop('tagName').toLowerCase();
        i = "#" + $(this).prop('id');
        t = $(this).text();
        c = $(`<a aria-label="${t}" href="${i}" rel="nofollow">${t}</a>`);
        l = $(`<li class="${n}_nav"></li>`).append(c);
        $(selector).append(l);
    })
    return a;
}

const sideElements = generateCatalog("ul.catalog-ul"), all_htags = []
let firstTag = null
sideElements.each((index, element) => {
    const name = element.id
    const innerTagsCount = 0
    const sideElement = $(`[aria-label="${element.innerText}"]`)
    const top =  $(`[id="${name}"]`).offset().top
    const htag = sideElement.parent()
    const htag_className = $(htag[0]).attr("class");
    const innerTags = htag.nextUntil(`[class="${htag_className}"]`)

    let innerFirstTag = null, i = 0
    while(!innerFirstTag && i < innerTags.length){
        if(innerTags[i].className > htag[0].className) innerFirstTag = innerTags[i].className
        i++
    }
    
    
    const tagName = $(`[id="${name}"]`).prop("tagName")
    if(!firstTag) firstTag = tagName
    
    if(tagName !== firstTag) sideElement.hide()

    all_htags.push({ sideElement, innerTags, innerFirstTag, innerTagsCount, top, tagName })
})

let count = [0, 0, 0, 0, 0]
for(let i = all_htags.length - 1; i >= 0; i--){
    const index = parseInt(all_htags[i].tagName.slice(-1))
    all_htags[i].innerTagsCount = 1
    count[index - 1] += 1
    if(i !== all_htags.length - 1 && index !== 5){
        for(let j = index; j < 5; j++){
            all_htags[i].innerTagsCount += count[j]
            count[index - 1] += count[j]
            count[j] = 0
        }
    }
}


$(window).scroll(() => {
    let curPos = window.pageYOffset
    let isBottom = parseInt(curPos + document.documentElement.clientHeight) === document.documentElement.scrollHeight
    all_htags.forEach((item, index) => {
        const {sideElement, innerTags, innerFirstTag, innerTagsCount, top} = item
        if(index < all_htags.length - 1){
            if(innerTagsCount > 1){
                let index2 = Math.min(index + innerTagsCount, all_htags.length - 1);

                if(curPos >= top && curPos < all_htags[index2].top && !isBottom){
                    sideElement.attr("style", "color: #337ab7")
                    innerTags.filter((index, tag) => tag.className === innerFirstTag).slideDown()
                }
                else{ // 收起來
                    sideElement.removeAttr("style", "color")
                    innerTags.filter((index, tag) => tag.className === innerFirstTag).slideUp()
                }
            }
            
            else{
                if(curPos >= top && curPos < all_htags[index + innerTagsCount].top && !isBottom) sideElement.attr("style", "color: #337ab7")
                else sideElement.removeAttr("style", "color")
            }
        }
        
        else{
            if(curPos >= top || isBottom) sideElement.attr("style", "color: #337ab7")
            else sideElement.removeAttr("style", "color")
        }
    })
})