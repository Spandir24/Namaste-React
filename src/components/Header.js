import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

//Header component

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header rendered");

  //UNDERSTANDING useEffect()-
  ///1. if no dependency array => useEffect is called on every render
  useEffect(() => {
    console.log("useEffect with no dependency array called!");
  });

  ///2. if dependency array is empty []  => useEffect is called ONLY ONCE on initial render
  useEffect(() => {
    console.log("useEffect with empty dependency array called ONLY ONCE!");
  }, []);

  ///3. if dependency array contains a value  => useEffect runs after initial render & whenever the state of dependency changes
  useEffect(() => {
    console.log("useEffect with dependency array.");
  }, [btnNameReact]);

  return (
    <div className="header">
      {/*LOGO*/}
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} height="50px" width="50px" />
      </div>

      {/*NAV-ITEMS*/}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>

          <button
            className="Login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login"); // TERNARY Operator
            }}
          >
            {btnNameReact}
          </button>
          {/*btnNameReact is inside {} because you are trying to put a JavaScript variable's value inside JSX.*/}
        </ul>
      </div>
    </div>
  );
};;

export default Header;
