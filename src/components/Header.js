import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

//Header component

const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header rendered");


  return (
    <div className="header">
      {/*LOGO*/}
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
          height="50px"
          width="50px"
        />
      </div>

      {/*NAV-ITEMS*/}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>

          <button className="Login" onClick={ () => {btnNameReact==='Login' ?  setbtnNameReact("Logout") : setbtnNameReact("Login");    // TERNARY Operator

          }}>{btnNameReact}</button>       
          {/*btnNameReact is inside {} because you are trying to put a JavaScript variable's value inside JSX.*/}


        </ul>
      </div>
    </div>
  );
};

export default Header;