/**
 * <div id="parent">
 *      </div id="child">
 *             <h1>
 *              I am h1 tag
 *             </h1>
 *             <h2>
 *               I am h2 tag
 *             </h2>
 *      </div>
 *      </div id="child2">
 *             <h1>
 *              I am h1 tag
 *             </h1>
 *             <h2>
 *               I am h2 tag
 *             </h2>
 *      </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands)
 */

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

console.log(parent) //Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);