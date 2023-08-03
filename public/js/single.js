window.addEventListener('DOMContentLoaded', (event) => {      
    document.querySelectorAll('pre[class*=language-]').forEach(function(node) {
        node.classList.add('line-numbers');
    });
    Prism.highlightAll();
});
