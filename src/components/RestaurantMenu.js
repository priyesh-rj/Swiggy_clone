import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
   const {resId}=useParams();
   const resInfo= useRestaurantMenu(resId)
   console.log(resId);
 
     if(resInfo===null)return <Shimmer/>;
    const {name,cloudinaryImageId,cuisines,costForTwo,avgRating,sla,areaName,phone,locality}=resInfo?.cards?.[2]?.card?.card?.info || {};
    const {itemCards}=resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card.card || {};
    console.log(itemCards);
 

    return (
        <div className="mx-auto p-4 w-[400px] border-2 border-black hover:shadow-2xl h-[600px] bg-gray-100 ">
           <h2 className="font-bold text-center ">{name}</h2>
            <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="rounded-lg w-full h-[200px]" />
            <h4>{locality}</h4>
            <h4>{phone}</h4>
            <h1>{areaName}</h1>
            <h1>{cuisines?.join(", ")}</h1> 
            <h1>{avgRating}</h1>
           <h4>{sla?.deliveryTime} mins</h4>
            <h4>{costForTwo/100}</h4>

            <h1 className="font-bold text-center">.............MENU.......</h1>
            <ul>
              
                {
                    itemCards?.map((item)=><li key={item.card.info.id}>{item.card.info.name}---Rs= {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)
                }
               
            </ul>

        </div>
        )
    
}
export default RestaurantMenu;