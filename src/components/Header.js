import {LOGO_URL} from "../utils/constants";

//Header component

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;