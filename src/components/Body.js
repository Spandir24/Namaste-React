import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";


//Body component
const Body = () => {
  //NORMAL JS VARIABLE
  /*let listOfRestaurantsJS = [
    {
      data: {
        restaurant_id: "1",
        name: "Meghana Foods",
        cuisines: ["Biryani", "Andhra", "South Indian", "Chinese"],
        rating: 3.8,
        costForTwo: 40000,
        delivery_time_minutes: 33,
        cloudinaryImg:
          "2025/12/4/0d27bcbb-c4a9-4616-a991-156079952c01_432557.JPG",
      },
    },
    {
      data: {
        restaurant_id: "2",
        name: "Dominos",
        cuisines: ["Biryani", "Andhra", "South Indian", "Chinese"],
        rating: 4.7,
        costForTwo: 40000,
        delivery_time_minutes: 33,
        cloudinaryImg:
          "2025/12/4/0d27bcbb-c4a9-4616-a991-156079952c01_432557.JPG",
      },
    },
    {
      data: {
        restaurant_id: "3",
        name: "McD",
        cuisines: ["Biryani", "Andhra", "South Indian", "Chinese"],
        rating: 4.3,
        costForTwo: 40000,
        delivery_time_minutes: 33,
        cloudinaryImg:
          "2025/12/4/0d27bcbb-c4a9-4616-a991-156079952c01_432557.JPG",
      },
    },
  ];
  */

  // Now we understand 'React Hooks': 1) useState()-
  //LOCAL STATE VARIABLE- (super powerful react variable): we use REACT HOOK (useState)
  // const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  //above line is doing DESTRUCTURING- (wiz simplified below) 
  const arr = useState(resList);
  const [listOfRestaurants, setlistOfRestaurants] = arr;             // "ARRAY DESTRUCTURING"
  //what the above line does is:
  /*const listOfRestaurants = arr[0];
  const setlistOfRestaurants = arr[1];
  */


  //2) useEffect()-
  useEffect( () => {
    fetchData();
  }, [] )

//console.log("Body rendered!");       // will obv be rendered before the UseEffect 

const fetchData= async () => {
  try{
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9315929&lng=77.624480699999998&page_type=DESKTOP_WEB_LISTING",
    ); // here 'data' is the response object returned by fetch()

    const json = await data.json(); //The .json() method (that belongs to the 'data' Response object.) reads the response body and converts JSON data into a JavaScript object. It takes some time to read and process the response body. It returns a Promise, therefore, we use await.
    console.log(json);
  } catch(error){
    console.log("Fetch failed:", error);
  }
}




  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.rating > 4.4,
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
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
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.restaurant_id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};;

export default Body;
