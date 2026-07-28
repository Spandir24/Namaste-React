import React from "react";
import ReactDOM from "react-dom/client";

// React element => is an 'Object' => when we render it onto DOM it becomes an 'HTML element' 
const heading= React.createElement("h1", {id: "heading"}, "Namaste React");
const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)