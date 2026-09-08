import { CDN_URL } from "../utils/constants";

//RestaurantCard component
const RestaurantCard = (props) => {
  // console.log(props);          // props are obj => react wraps props as obj and sends it

  // const {resName, cuisine}= props;        // destructuring done when we manually passing the data

  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, id, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <div className="imgContainer">
        <img className="card1Img" src={CDN_URL + cloudinaryImageId} />{" "}
        {/* we had to wrigte in {} becz it has JS */}
      </div>

      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.deliveryTime} mins</h5>
      <h5>₹{costForTwo / 100} for two</h5>
      <h5>{id} ID</h5>

      {/* <h5 className="stars">4.4 stars</h5>
      <h5 className="time">38 mins</h5> */}

      {/* <div className="rating-box">
        {<HugeiconsIcon icon={StarIcon} className="star-icon" /> }
      </div> */}
    </div>
  );
};

export default RestaurantCard;
