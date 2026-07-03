import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";
const RestaurantCard = (props) => {

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla} = props.resData;
  // } = props.resData.card.card.info;
  console.log(props.resData);

  return (
    <div className="m-4 p-4 w-[250px] hover:shadow-2xl h-[400px] bg-gray-100 ">
      <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="rounded-lg w-full h-[200px]" />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating}</h5>
      <h5>{sla.deliveryTime} mins</h5>
    </div>
  );
};

export default RestaurantCard;