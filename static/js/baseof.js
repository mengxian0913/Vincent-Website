let loading = document.querySelector("#loading");
let content = document.querySelector("#content");

content.style.display = "none";
    
window.onload = (event) => {
    console.log("Window are loaded.\n");
    content.style.display = "block";
    loading.style.display = "none";
};