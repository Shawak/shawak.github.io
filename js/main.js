for (const element of document.querySelectorAll('.markdown')) {
    element.innerHTML = marked(element.innerHTML.trim());
    element.style.opacity = 1;
}