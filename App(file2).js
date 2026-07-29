import React from "react";
import ReactDOM from "react-dom/client";

// React element => is an 'Object' => when we render it onto DOM it becomes an 'HTML element'
/*const heading= React.createElement("h1", {id: "heading"}, "Namaste React");            // here we created a react element using React
//console.log(heading)

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)*/

//JSX => HTML like or XML like syntax
/*const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
); // here we created a react element using JSX- (I wrote w/o () but these were added automatically here)
//console.log(jsxHeading)            //gives same o/p as 'heading'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
*/

// but this JSX syntax cannot be understood by the JS engine (like in browsers) so it is TRANSPILED before it reaches the JS engine by a package used by parcel cxalled 'BABEL'
// JSX => does 'React.createElement' BTS => which creates a 'ReactElement' wiz - JS Object => when rendered it becomes an HTML Element

//to write JSX code in multiple lines we wrap in ()
/*const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);
*/

//REACT COMPONENT: [A React component is a reusable, independent piece of UI that returns JSX and can accept data through props and manage its own state]
// Must start with a Capital letter
//React functional component is a JS func => which returns a JSX element/ React element
const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional component</h1>;
};
//    OR (to write w/o 'return') // Preferred
/*const HeadingComponent2 = () => (
  <h1 className="heading">Namaste React Functional component</h1>
);
*/

// Also, to write it in 'multiple lines'- wrap inside ()

// a React Func component can also be nested
/*const HeadingComponent2 = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);

// To render a func component inside a root
root.render(<HeadingComponent2 />);
*/

const elem = <span>React element</span>; /*to put inside another element */
const title = (
  <h1 className="head" tabIndex="5">
    {elem}; Namaste React using func component;
  </h1>
);

const Title = () => {
  <h1 className="head" tabIndex="5">
    Namaste React using func component
  </h1>;
};

const HeadingComponent2 = () => (
  <div id="container">
    {/* to render 'title' component here: 'COMPONENT COMPOSITION' */}
    {<Title />} {/* OR We can also write this as: <Title></Title> */}
    {Title()}{" "}
    {/* We can also calll a func component(wiz normal func only) inside a componenet */}
    {/* title */}
    <h2>{console.log("HELLO SANA!! ")}</h2>
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
