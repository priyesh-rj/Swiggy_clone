
import RestaurantCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import Footer from "./Footer";
const Body=()=>{
  // local state variable- super powerful variable
  const [newResList,setListOfRestaurants]=useState(resList);

  const [searchText, setSearchText]=useState("");
  const [filteredList,setfilteredList]=useState(resList);
   console.log("Body Rendered");
  useEffect(()=>{fetchData();console.log("checking render cycle in useeffect")},[]);
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=26.83730&lng=80.91650&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");
    // const text = await data.text();
    // const json=JSON.parse(text);
    const json=await data.json();
     setListOfRestaurants(json?.data?.cards?.slice(3));
     setfilteredList(json?.data?.cards?.slice(3));
     
    console.log(json)
    console.log(json.data.cards.slice(3));
    console.log(json.data.cards.slice(3)[0].card.card.info);
    
    console.log(newResList);
    console.log(newResList[0]);
    
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)return <h1>Looks like you are offline</h1>;
 
 
  if(newResList.length===0){
      return <Shimmer/>
              
      console.log("loading");
    };

  return(
    <div className="">
      <div className=" flex ">
        <div className="flex items-center"><input type="text" placeholder="search" className="border borrder-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
        onClick={()=>{const filteredList=newResList.filter((res)=>{ return res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())}); setfilteredList(filteredList);}}>
          Search</button></div> 
       
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{  
          const filteredList=newResList.filter((res)=>res.card.card.info.avgRating>4);
          setfilteredList(filteredList);
          
        }}  >top reated restaurants </button> 
           
        </div>
        
     
      <div className="flex flex-wrap">
        {/* <RestaurantCard resData={resList[0]}/>
        <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>
        <RestaurantCard resData={resList[3]}/>
        <RestaurantCard resData={resList[4]}/>
        <RestaurantCard resData={resList[5]}/>
        <RestaurantCard resData={resList[6]}/>
        <RestaurantCard resData={resList[7]}/>
        <RestaurantCard resData={resList[8]}/> */}
        {
          filteredList.map((restaurant)=>{    //what we have done just above repeating things we do by using map
            return <Link  key={restaurant.card.card.info.id} to={"/restaurant/"+restaurant.card.card.info.id}><RestaurantCard  resData={restaurant.card.card.info}/> </Link> //always use key unique id,but not index
          })
        }
      </div>
      
    </div>
  );
};

export default Body;