function render(a) {
    document.body.append(...a);
}
function createElement(tagName, attrs = {}, ...children) {
    const elem = Object.assign(document.createElement(tagName), attrs);
    for (const child of children) {
        if (Array.isArray(child))
            elem.append(...child);
        else
            elem.append(child);
    }
    return elem;
}
function Play({ song }) {
    return <p>Playing {song}</p>;
}
function App() {
    document.querySelector('body').style.background = 'black';
    return (<Play song="Test"/>);
}
render(App);
//# sourceMappingURL=app.jsx.map