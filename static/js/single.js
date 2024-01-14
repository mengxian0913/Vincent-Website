window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("pre[class*=language-]").forEach(function (node) {
    node.classList.add("line-numbers");
  });
  Prism.highlightAll();
});

const ToTopArrow = document.querySelector(".imgcontainer");

let CurrentScrollY = -1;
// 監聽網頁的滾動事件
window.addEventListener("scroll", function () {
  // 獲取目前的捲軸位置
  var scrollY = window.pageYOffset;
  // 如果捲軸位置大於0，表示正在向上滾動
  if (scrollY < CurrentScrollY && scrollY > 80) {
    ToTopArrow.style.width = "65px";
    ToTopArrow.style.height = "65px";
    ToTopArrow.style.transform = "rotate(360deg)";
  } else {
    ToTopArrow.style.width = "0px";
    ToTopArrow.style.height = "0px";
    ToTopArrow.style.transform = "rotate(-360deg)";
  }

  CurrentScrollY = scrollY;
});

ToTopArrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//////////////
let allImage = document.querySelectorAll("img");
let deviceWidth = window.innerWidth;
