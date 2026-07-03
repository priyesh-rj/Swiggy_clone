import { FaBullseye } from "react-icons/fa"; // Mission
import { FaEye } from "react-icons/fa";      // Vision
import { FaCheckCircle, FaSmile, FaHome, FaMotorcycle,FaStar } from "react-icons/fa";   // Values
import bg from "../assets/bg.jpeg"
 
const About=()=>{
  return(
    <div className="About"> 
    {/* .................top box....................... */}
    
<div className="h-[300px] rounded-3xl bg-gray-900  mx-10 mt-2 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${bg})`,
      }}>
   <div className="heroSection text-white mt-7 pt-20 pl-6 ml-5 mr-[50%]">
    <p className="text-yellow-400">About</p>
    <h1 className="text-4xl font-bold">Good Food,Great Mood</h1>
    <p>Discover a world of delicious flavors crafted with passion and served with care. From comforting classics to
       exciting new tastes, we bring people together through food that creates memorable experiences. Every meal is 
       prepared with quality ingredients, ensuring freshness, satisfaction, and a reason to smile
        Serving happiness one plate at a time.
     </p>
   </div>
</div>
{/* ....................second part box have 3 divs............... */}
<div className="secondPart flex justify-around gap-5 h-[200px] mx-20 mt-6">
     <div className="border-2 h-full w-1/4 rounded-3xl hover:shadow-2xl cursor-pointer">
     <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
       <FaBullseye className="mr-2" />
      Our Mission
       </h2>
      <p className="p-4">To deliver happiness to our customers
        through great food, exceptional service, 
        and a warm atmosphere.
      </p>
     </div>
     {/* ............second div........... */}
      
     <div className="2 border-2   h-full w-1/4 rounded-3xl hover:shadow-2xl cursor-pointer">
           <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
       <FaEye className="mr-2" />
         Our Vision
       </h2>
       <ul className="space-y-1 p-1 pl-4">
  <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
    Customer First
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
    Global Reach
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
    Fast Delivery
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
    Quality Excellence
  </li>

  <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
    Sustainable Growth
  </li>
</ul>
     </div>
     {/* ..........................div3............ */}
     <div className="3 flex flex-wrap gap-1  pl-6  h-full w-1/4 rounded-3xl ">
      <div className="border-2 h-[50%] w-[40%] rounded-2xl hover:shadow-2xl cursor-pointer">
        <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
       <FaSmile className="mr-2 text-yellow-300" />
         10K+
       </h2>
       <p className="text-sm pl-2">Happy Customers</p>
      </div>
      <div className="border-2  h-[50%] w-[40%] rounded-2xl hover:shadow-2xl cursor-pointer">
         <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
       <FaHome className="mr-2 text-yellow-300" />
         500+
       </h2>
       <p className="text-sm pl-2">Top Restaurant</p>
      </div>
      <div className="border-2  h-[50%] w-[40%] rounded-2xl hover:shadow-2xl cursor-pointer">
         <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
       <FaMotorcycle className="mr-2 text-yellow-300" />
         50K+
       </h2>
       <p className="text-sm pl-2">Orders Delivered</p>
      </div>
      <div className="border-2  h-[50%] w-[40%] rounded-2xl hover:shadow-2xl cursor-pointer">
         <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
       <FaStar className="mr-2 text-yellow-300" />
         4.7
       </h2>
       <p className="text-sm pl-2">Average Rating</p>
      </div>
       
     </div>
</div> 
{/* .........................last div....................... */}
<div className="h-[300px] rounded-3xl border-2  mx-10 mt-10 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${bg})`,
      }}>
   <div className="heroSection text-black mt-2 pt-3 pl-6 ml-5 mr-[50%]">
    <p className="text-red-500">Our Story</p>
    <h1 className="text-4xl font-bold">How it all started</h1>
    <p>Our journey started with one simple idea — great food has the 
      power to bring people together. 
      From humble beginnings to serving thousands of happy customers, 
      we remain committed to quality, 
      taste, and creating unforgettable experiences every day.

     </p>
     <button className="p-3 rounded-2xl mt-7 bg-red-600  ">Learn More</button>
   </div>
</div>
</div>
  )
}

export default About;