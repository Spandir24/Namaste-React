import React from "react";
import ReactDOM from "react-dom/client";

// Building 'Namaste Food' app
/* COMPONENTS INCLUDE:

HEADER
    -logo
    - nav items
BODY
    -search
    -restaurantContainer
        -restaurantCard
FOOTER
    -copyright
    -links
    -address
    -contact
*/

//Header component
const Header = () => {
  return (
    <div className="header">
      {/*LOGO*/}
      <div className="logo-container">
        <img
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
          height="100px"
          width="100px"
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

// App component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
