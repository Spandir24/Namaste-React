import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


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

export default Body;
