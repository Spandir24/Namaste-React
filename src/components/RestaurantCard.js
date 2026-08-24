import {CDN_URL} from "../utils/constants"


//RestaurantCard component
const RestaurantCard = (props) => {
  // console.log(props);          // props are obj => react wraps props as obj and sends it

  // const {resName, cuisine}= props;        // destructuring done when we manually passing the data

  const { resData } = props;
  const {
    cloudinaryImg,
    name,
    cuisines,
    rating,
    delivery_time_minutes,
    costForTwo,
    restaurant_id,
  } = resData?.data;

  return (
    <div className="res-card">
      <div className="imgContainer">
        <img
          className="card1Img"
          src={CDN_URL +
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
      <h5>{restaurant_id} ID</h5>

      {/* <h5 className="stars">4.4 stars</h5>
      <h5 className="time">38 mins</h5> */}

      {/* <div className="rating-box">
        {<HugeiconsIcon icon={StarIcon} className="star-icon" /> }
      </div> */}
    </div>
  );
};

export default RestaurantCard;