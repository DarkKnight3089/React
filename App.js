import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",{id: "parent"},[
        React.createElement(
            "div",{id: "child"},
            [React.createElement(
                "h1",{},"I am H1 Tag"),React.createElement("h2",{},"I am h2 Tag")]),
            
    React.createElement(
        "div",{id: "child2"},
        [React.createElement(
            "h1",{},"I am H1 Tag"),React.createElement("h2",{},"I am h2 Tag")])]);

// const heading = React.createElement("h1",{id: "heading",xyz : "ABC"}, "Hello World from React!");

//JSX

console.log(parent); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);