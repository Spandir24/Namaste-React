import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


//Body component
const Body = () => {
  //STATE VARIABLE- (super powerful react variable): we use REACT HOOK (use state)





  //NORMAL JS VARIABLE
  let listOfRestaurants = [
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


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter( (res) => res.data.rating > 4);
            console.log(listOfRestaurants);

          }}
        >Top Rated Restaurants</button>
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
};

export default Body;
