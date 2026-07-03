import {
  FaMapMarkerAlt,   // Location
  FaPhoneAlt,       // Telephone
  FaEnvelope,       // Email
  FaClock ,          // Working Hours
  FaHeadset,      // Quick Support
  FaHeart,        // We Care
  FaShieldAlt,    // Trusted Service
  FaUsers
} from "react-icons/fa";
const Contact=()=>{
    return(
         <div className="contact">
            {/* ......................first div....,................ */}
          <div className="h-[300px] rounded-3xl bg-gray-900  mx-10 mt-2 bg-cover bg-center bg-no-repeat">
                 
             <div className="heroSection text-white mt-4 pt-4 pl-6 ml-5 mr-[50%]">
              <p className="text-yellow-400 ">Get in touch</p>
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p>We'd love to hear from you! Whether you have a question, feedback, partnership inquiry, or just want to say hello,
                 feel free to reach out. Our team is always ready to assist you.
               </p>
             </div>
          </div>
          {/* ............................second div..have 3 divs.................... */}
          <div className="main_1st flex justify-around gap-5 h-[500px] mx-20 mt-6 ">
            <div className="ContactDetails border-2 hover:shadow-2xl w-1/3 rounded-2xl">
                <div className=" cursor-pointer mx-8 border-b border-gray-400 py-1">
                    <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
                           <FaMapMarkerAlt className="mr-3" />
                          Our Location
                    </h2>
                    <p className="ml-12">123 Food Street,flaver town,
                        Delhi city,FD123456</p>
                </div>
                <div className=" cursor-pointer mx-8 border-b border-gray-400 py-1">
                    <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
                           <FaPhoneAlt className="mr-3" />
                          Phone Number
                    </h2>
                    <p className="ml-12">+91 6393373865</p>
                </div>
                <div className=" cursor-pointer mx-8 border-b border-gray-400 py-1">
                    <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
                           <FaEnvelope className="mr-3" />
                          Email Address
                    </h2>
                    <p className="ml-12">hiipriyeh@gmail.com</p>
                </div>
                <div className=" cursor-pointer mx-8 border-b border-gray-400 py-1">
                    <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
                           <FaClock className="mr-3" />
                          Working Hours
                    </h2>
                    <p className="ml-12">Monday to Friday: 9:00 AM to 6:00 PM</p>
                </div>
            </div>
            {/* ....................................contact form div........................... */}
            <div className="ContactForm  border-2  w-1/3 rounded-2xl">
                <div className=" flex justify-center font-semibold text-2xl p-3 pl-2">Send a Message</div>
                <div className="form">
                    <input type="text" placeholder="Name " className="border-2 ml-4 p-2 w-[90%] mb-10 " /><br></br>
                    <input type="email" placeholder="Email" className="border-2 ml-4 p-2 w-[90%] mb-10 "/>
                    <input type="text" placeholder="Subject"className="border-2 ml-4 p-2 w-[90%] mb-10" />
                    <textarea placeholder="Message" className="border-2 ml-4 p-2 w-[90%] "></textarea>
                     
                </div>
                <div className=" flex justify-center"><button className="p-3 rounded-2xl mt-7 bg-red-600 w-40">Submit</button></div>
            </div>
            {/* .....................contactMap div............................. */}
            <div className="ContactMap  border-2 border-blue-800 w-1/3 rounded-2xl"></div>
          </div>
          {/* .........................Last div..have 4 inner div........................ */}
          <div className="main_3nd flex justify-around gap-5 h-[130px] mx-20 mt-6 ">
            <div className="border-2 rounded-3xl hover:shadow-2xl cursor-pointer">
                <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
                           <FaHeadset className="mr-3" />
                          Quick Support
                    </h2>
                    <p className="ml-12 ">We're here to help as 
                        soon as possible</p>
            </div>
            <div className=" border-2 rounded-3xl hover:shadow-2xl cursor-pointer">
                <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
                           <FaHeart className="mr-3" />
                          We care
                    </h2>
                    <p className="ml-12">Your satisfaction is our priority</p>
            </div>
            <div className=" border-2 rounded-3xl hover:shadow-2xl cursor-pointer">
                <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
                           <FaShieldAlt className="mr-3" />
                          Trusted Service
                    </h2>
                    <p className="ml-12">Reliable and quality service </p>
            </div>
            <div className=" border-2 rounded-3xl hover:shadow-2xl cursor-pointer">
                <h2 className="flex items-center font-semibold text-2xl mb-2 ml-4 mt-4">
                           <FaUsers className="mr-3" />
                          Stay Connected
                    </h2>
                    <p className="ml-12">Follow us on social media</p>
            </div>
          </div>
        </div>

    )
   
};
export default Contact;