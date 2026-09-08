import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";         // we can delete the mockData.js file too
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

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
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //above line is doing DESTRUCTURING- (wiz simplified below)
  /*const arr = useState(resList);
  const [listOfRestaurants, setlistOfRestaurants] = arr;             // "ARRAY DESTRUCTURING"
  */
  //what the above line does is:
  /*const listOfRestaurants = arr[0];
  const setlistOfRestaurants = arr[1];
  */

  //2) useEffect()-
  useEffect(() => {
    fetchData();
  }, []);

  //console.log("Body rendered!");       // will obv be rendered before the UseEffect

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9315929&lng=77.624480699999998&page_type=DESKTOP_WEB_LISTING",
      ); // here 'data' is the response object returned by fetch()

      const json = await data.json(); //The .json() method (that belongs to the 'data' Response object.) reads the response body and converts JSON data into a JavaScript object. It takes some time to read and process the response body. It returns a Promise, therefore, we use await.
      console.log(json);

      setlistOfRestaurants(json.data.cards[2].data.data.cards); // here we display the received data on screen =>>>>>>> BUT THIS IS NOT A GOOD WAY OF WRITING CODE  =>>>>>> Thus, we can do 'OPTIONAL CHAINING'
      setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);       // we keep this unchanged
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);        // we filter acc to our need, display it on UI and refresh this after every page reload/ component re-render


    } catch (error) {
      console.log("Fetch failed:", error);
    }
  };

  // logic to display the spinning loader:-
  //CONDITIONAL RENDERING
  /*if (listOfRestaurants.length === 0) {
    return <Shimmer />;
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
        //To rectify the key error 
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.restaurant_id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
  */

  //OR Another way to write the above situation(ie., displaying shimmer effect or filtered data with rating > 4.4 ) w/o using 2 return sttaements is via-: TERNARY operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* Category search button */}
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //searchText
              console.log(searchText);

              //filter the restaurant cards & update the UI
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                res.data.name.toLowerCase().includes(searchText.toLowerCase());
              }); // becomes case insensitive now.. YAYY

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/*Top Restaurants list */}
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
        {/*To rectify the key error */}
        {setFilteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.restaurant_id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
