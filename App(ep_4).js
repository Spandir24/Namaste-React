import React from "react";
import ReactDOM from "react-dom/client";

import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

// Building 'Namaste Food' app
/* COMPONENTS INCLUDE:

HEADER
    -logo
    - nav items
BODY
    -search
    -restaurantContainer
        -restaurantCard
          -img
          -Name of Res, star rating, cuisine, delivery time
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

//Body component
const Body= () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Medu Vada . South Indian . Asian"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="American"
        />
        {/* <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/> */}
      </div>
    </div>
  );
}

//RestaurantCard component
const RestaurantCard = (props) => {
  // console.log(props);          // props are obj => react wraps props as obj and sends it

  const {resName, cuisine}= props;
  return (
    <div className="res-card">
      <div className="imgContainer">
        <img
          className="card1Img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgHIW4CvfVLpWbR6VzR5rxZQsfTrDsW6eueqUc8N-rjkqvPejIDu-njjZ&s=10"
        />
      </div>

      <h3>{resName}</h3>
      <h5>{cuisine}</h5>

      <h5 className="stars">4.4 stars</h5>
      <h5 className="time">38 mins</h5>

      {/* <div className="rating-box">
        {<HugeiconsIcon icon={StarIcon} className="star-icon" /> }
      </div> */}
    </div>
  );
};



// App component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

