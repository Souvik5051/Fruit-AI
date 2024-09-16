import React, { useState } from "react";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";
let user="";

function Join() {
   
   const [name,setName]=useState("");

   const sendUser = () => {
    if (!name) {
      toast.error("Please enter your name"); 
    } else {
      user = name;
      setName("");
    }
  };

 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-72 text-center h-screen">
        <div className=" mt-52">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-light cursor-pointer">
          Hello <span className="text-purple-400" >Chat.</span>
        </h1>
        
        <p className="text-gray-400 mt-2">
          The last chat app you'll ever need.
        </p>
        <input onChange={(e) => setName(e.target.value)} type="text" id="joinInput" className=" border mb-4"/>
        
        <Link onClick={sendUser} to={name ? "/chat" : "#"}>
          <button className=" font-light text-purple-400 bg-slate-600 rounded-lg w-[80%] text-2xl ">Chat</button>
        </Link>
        
      </div>
    </div>
    
  );
}

export default Join;
export { user };