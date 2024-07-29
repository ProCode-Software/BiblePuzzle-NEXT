"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Play(_a) {
    var song = _a.song;
    return react_1.default.createElement("p", null,
        "Playing ",
        song);
}
function App() {
    document.querySelector('body').style.background = 'black';
    return (react_1.default.createElement(Play, { song: "Test" }));
}
exports.default = App;
