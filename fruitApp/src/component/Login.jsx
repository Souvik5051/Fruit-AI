import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

const Login = () => {
  const navigate=useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          By signing in you are agreeing <br /> to our <a href="#" className="text-blue-600">Term and privacy policy</a>
        </p>
        
        <div className="flex justify-center space-x-8 mb-6 text-sm">
          <a href="#" className="text-black border-b-2 border-black">Login</a>
          <a href="#" className="text-gray-400">Register</a>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 text-gray-600 text-sm" htmlFor="email">Email Address</label>
          <input type="email" id="email" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email Address" />
        </div>
        
        <div className="mb-4 relative">
          <label className="block mb-2 text-gray-600 text-sm" htmlFor="password">Password</label>
          <input type="password" id="password" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Password" />
          <span className="absolute right-3 top-9 text-gray-600 cursor-pointer">👁️</span>
        </div>

        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember password
          </label>
          <a href="#" className="text-blue-600">Forget password</a>
        </div>

        <button onClick={()=>navigate('/home')}className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300" >Login</button>

        <div className="text-center my-4 text-gray-600 text-sm">or connect with</div>

       
      <div className="flex space-x-6 mb-8 justify-center">
        <a href="https://facebook.com" className="text-4xl text-blue-600">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" className="text-4xl text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://pinterest.com" className="text-4xl text-red-600">
          <FaPinterestP />
        </a>
        <a href="https://linkedin.com" className="text-4xl text-blue-700">
          <FaLinkedinIn />
        </a>
      </div>

     
      <div className="flex justify-center items-center">
          <div className="text-7xl text-blue-500">
            <MdFingerprint />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
