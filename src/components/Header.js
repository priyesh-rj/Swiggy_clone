import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
const Header=()=>{
  const [btn,setBtn]=useState("Login");
  const onlineStatus=useOnlineStatus();
  return(
    <div className="flex justify-between bg-pink-300 shadow-2xl sticky top-0  z-50 " >
      <div className="logo">
        <img className="w-20" src={LOGO_URL}/></div>
        <div className="flex items-center">
          <ul className="flex p-2 m-2 gap-5">
            <li className="px-4">Status{(onlineStatus===true?"🟢":"🔴")}</li>
            <li className="px-4">
              <Link to="/"> Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4"><Link to="/cart">Cart</Link></li>
            <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
             <button className="px-4" onClick={()=>{
             btn==="Login"?setBtn("Logout"):setBtn("Login");}}>{btn}</button>
           
          </ul>
        </div>
      </div>
    
  )
     
}
export default Header;