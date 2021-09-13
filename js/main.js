var renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
    var link = marked.Renderer.prototype.link.apply(this, arguments);
    return link.replace("<a", "<a target='_blank'");
};

marked.setOptions({
    renderer: renderer
});

for (const element of document.querySelectorAll('.markdown')) {
    element.innerHTML = marked(element.innerHTML.trim());
    element.style.opacity = 1;
}
