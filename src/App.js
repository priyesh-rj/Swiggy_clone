import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/Restaurant";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import { lazy,Suspense } from "react";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";
 


const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout=()=>{
  return(
    <div className="app">
    <Header/>
   
    <Outlet/>
    <Footer/>
    </div>
  )
}
const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>},
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      
      {
        path:"/Grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:resId",   //resId is a dynamic parameter we will get data from API.
        element:<RestaurantMenu/>
      },
       
    ],
    errorElement:<Error/>,
  },

     
  
])
 const root=ReactDOM.createRoot(document.getElementById("root")) 
 root.render(<RouterProvider router={appRouter}/>);
 