let loading = document.querySelector("#loading");
let content = document.querySelector("#content");

content.style.display = "none";

window.onload = (event) => {
  content.style.display = "block";
  loading.style.display = "none";
};
