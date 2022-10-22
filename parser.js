window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];

    function recurse(element) {
        element.childNodes.forEach(node => {
            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content: node.textContent.trim()
                }
                textNodes.push(obj);
            } else {
                recurse(node)
            }
        })
    }

    recurse(body);
    console.log(textNodes);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(textNodes)
    }).then(response => response.json())
  .then(json => console.warn(json));
})