document.addEventListener("DOMContentLoaded", function() {
    var spoilerTitles = document.querySelectorAll(".spoiler-title");
    spoilerTitles.forEach(function(title) {
        title.addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.height === "0px") {
                content.style.height = content.scrollHeight + "px";
            } else {
                content.style.height = "0";
            }
        });
    });
});