import React from "react";
import ReactDOM from "react-dom/client";

/*const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "HELLO WORLD FROM REACT!!");

// console.log(heading);        // gives an obj

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

// how to create a nested html struc via react:
/* SAMPLE STRUC TO BE CREATED-
<div id= "parent">
    <div id="child">
        <h1>"I AM AN H1 TAG!"</h1>
    </div>
</div>
*/

/*const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I AM AN H1 TAG!"),
  ),
);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// Now, to pass mre than 1 children, we pass the 3rd argument as 'array of children':
/* SAMPLE STRUC TO BE CREATED-
<div id= "parent">
    <div id="child">
        <h1>"I AM AN H1 TAG!"</h1>
        <h2>"I AM AN H2 TAG!"</h2>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I AM NAMASTE REACT!"),
    React.createElement("h2", {}, "I AM AN H2 TAG!"), //but this gives an error as well which we will study later.
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//Now suppose we have to write this struc:
/*<div id="parent">
    <div id="child1">
      <h1>"I AM AN H1 TAG!"</h1>
      <h2>"I AM AN H2 TAG!"</h2>
    </div>

    <div id="child2">
      <h1>"I AM AN H1 TAG!"</h1>
      <h2>"I AM AN H2 TAG!"</h2>
    </div>
</div>;
*/

// This is written by passing the 3rd argument as an array of 2 div child's as well, which itself further contain an array of heading siblings
// But such JS code is very complex thus we use JSX
