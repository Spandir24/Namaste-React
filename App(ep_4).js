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
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/*<RestaurantCard
          resName="KFC"
          cuisine="American"
        /> */}

        {/* multiple same cards: */}
        {/* <RestaurantCard/>                        
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/> */}

        {/*Dynamic card making: */}
        {/*<RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />  
        */}

        {/*Looping to generate the reqd no of restaurant cards */}
        {/*resList.map((restaurant) => (
          <RestaurantCard
            resData={restaurant}
          />
        ))
        */}


        {/*To rectify the key error */}
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.restaurant_id}
            resData={restaurant}
          />
        ))}

        
      </div>
    </div>
  );
};

const resList = [
  {
    type: "restaurant",
    data: {
      restaurant_id: "3241",
      name: "Meghana Foods",
      cuisines: ["Biryani", "Andhra", "South Indian", "Chinese"],
      rating: 4.7,
      rating_count: "93K+",
      costForTwo: 40000,
      delivery_time: "30-35 MINS",
      delivery_time_minutes: 33,
      last_mile_distance_km: 2.2,
      address: "Residency Road, Bangalore",
      area_name: "Residency Road",
      city: "Bangalore",
      is_open: true,
      veg_only: false,
      cloudinaryImg:
        "2025/12/4/0d27bcbb-c4a9-4616-a991-156079952c01_432557.JPG",
    },
  },
  {
    type: "restaurant",
    data: {
      restaurant_id: "5678",

      name: "Pizza Hut",

      cuisines: ["Pizza", "Italian", "Fast Food"],

      rating: 4.4,

      rating_count: "18K+",

      costForTwo: 60000,

      delivery_time: "25-30 MINS",

      delivery_time_minutes: 28,

      last_mile_distance_km: 1.8,

      address: "Koramangala, Bangalore",

      area_name: "Koramangala",

      city: "Bangalore",

      is_open: true,

      veg_only: false,

      cloudinaryImg:
        "2026/6/15/146d5c41-617f-4a7f-8cf8-57b930e0fa5d_683309.JPG",
    },
  },
  {
    type: "restaurant",
    data: {
    restaurant_id: "7892",
    name: "Burger King",

    cuisines: ["Burgers", "American", "Fast Food", "Beverages"],

    rating: 4.3,

    rating_count: "25K+",

    costForTwo: 45000,

    delivery_time: "20-25 MINS",

    delivery_time_minutes: 23,

    last_mile_distance_km: 1.4,

    address: "Indiranagar, Bangalore",

    area_name: "Indiranagar",

    city: "Bangalore",

    is_open: true,

    veg_only: false,

    cloudinaryImg: "2025/6/18/ccdcab64-ec05-4936-8fdd-63858e3ab383_455910.jpg",
    }
  },
  {
    type: "restaurant",
    data: {
    restaurant_id: "4567",

    name: "North Indian Thali House",

    cuisines: ["North Indian", "Thalis", "Punjabi", "Indian"],

    rating: 4.6,

    rating_count: "12K+",

    costForTwo: 50000,

    delivery_time: "30-35 MINS",

    delivery_time_minutes: 32,

    last_mile_distance_km: 3.1,

    address: "HSR Layout, Bangalore",

    area_name: "HSR Layout",

    city: "Bangalore",

    is_open: true,

    veg_only: false,

    cloudinaryImg: "2025/7/14/b4edad49-7b17-4550-9b56-2f3ae57ee5f4_1022541.jpg",
    }
  },
  {
    type: "restaurant",
    data: {
    restaurant_id: "9234",

    name: "The Dessert Heaven",

    cuisines: ["Desserts", "Bakery", "Cakes", "Ice Cream"],

    rating: 4.5,

    rating_count: "9K+",

    costForTwo: 35000,

    delivery_time: "15-20 MINS",

    delivery_time_minutes: 18,

    last_mile_distance_km: 0.9,

    address: "MG Road, Bangalore",

    area_name: "MG Road",

    city: "Bangalore",

    is_open: true,

    veg_only: true,

    cloudinaryImg: "2025/6/16/066bd2a7-b934-4181-999a-79b8bddda29c_585614.jpg",
    }
  },
];

//RestaurantCard component
const RestaurantCard = (props) => {
  // console.log(props);          // props are obj => react wraps props as obj and sends it

  // const {resName, cuisine}= props;        // destructuring done when we manually passing the data

  const { resData } = props;
  const {cloudinaryImg, name, cuisines, rating, delivery_time_minutes, costForTwo  } = resData?.data;

  return (
    <div className="res-card">
      <div className="imgContainer">
        <img
          className="card1Img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/" +
            cloudinaryImg
          }
        />{" "}
        {/* we had to wrigte in {} becz it has JS */}
      </div>

      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{rating} stars</h5>
      <h5>{delivery_time_minutes} mins</h5>
      <h5>₹{costForTwo / 100} for two</h5>

      {/* <h5 className="stars">4.4 stars</h5>
      <h5 className="time">38 mins</h5> */}

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
