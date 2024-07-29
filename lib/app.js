function render(a) {
  document.body.append(a);
}
function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs);
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);else elem.append(child);
  }
  return elem;
}
function Play({
  song
}) {
  return createElement("p", null, "Playing ", song);
}
function App() {
  document.querySelector('body').style.background = 'black';
  return createElement(Play, {
    song: "Test"
  });
}
render(App());