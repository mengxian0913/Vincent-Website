function generateCatalog(selector) {
  _container = "#markdown-content";
  let titleList = $(_container).find("h1, h2, h3, h4, h5, h6");
  $(selector).html("");

  titleList.each(function () {
    const className = $(this).prop("tagName").toLowerCase() + "_catalog";
    const href = "#" + $(this).attr("id");
    const title = $(this).text();
    const a = $(`<a href="${href}">${title}</a>`);
    const li = $(`<li class="${className}"></li>`).append(a);
    $(selector).append(li);
  });

  return titleList;
}

function main() {
  const titleList = generateCatalog("ul.catalog-ul");
}

$(document).ready(main);
