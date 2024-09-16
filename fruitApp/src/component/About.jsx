import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-[#d7b9ff] via-[#c1d3fe] to-[#99effd]">
      {/* Top Section with Logos */}
      <div className="flex items-center justify-center w-full py-20">
        <div className="flex space-x-8">
          <div className="w-20 h-20 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-80"></div>
          <div className="w-20 h-20 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-80"></div>
          <div className="w-20 h-20 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-80"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-t-[40px]  rounded-b-[40px] w-full max-w-md mx-auto p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Fruit.Ai</h1>
        <p className="text-gray-700 text-center mb-8">
          Whether you're looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for
          you to integrate the best fruits into your daily routine.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-full w-[80%] mb-4 ml-8">
          ABOUT
        </button>
      </div>
    
    </div>
  );
}

export default About;
