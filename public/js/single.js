document.addEventListener('DOMContentLoaded', function() {
    var codeWrappers = document.querySelectorAll('.highlight');


    codeWrappers.forEach(function(wrapper) {
        var pre = wrapper.querySelector('pre');
        var code = pre.querySelector('code');
        // console.log(code);
        
        code.addEventListener('mousedown', function(e) {
            // e.preventDefault();
            
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(code);
            selection.removeAllRanges();
            selection.addRange(range);
        });
        
        code.addEventListener('mouseup', function(e) {
            e.preventDefault();
        });
    });
});


window.addEventListener('DOMContentLoaded', (event) => {      
    document.querySelectorAll('pre[class*=language-]').forEach(function(node) {
        node.classList.add('line-numbers');
    });
    Prism.highlightAll();
});
