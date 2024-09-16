import { useNavigate } from "react-router-dom";

function Home(){
   const navigate=useNavigate();

    return(
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d7b9ff] via-[#c1d3fe] to-[#99effd] font-poppins">
      <div className="flex flex-col items-center text-center space-y-6">
      
        <div className="text-white text-3xl font-bold">Fruit.Ai</div>
        <div className="text-white font-semibold">"Be Healthy!"</div>

       
        <div className="grid grid-cols-2 gap-4 mt-8">
         
          <div className="bg-orange-200 rounded-lg shadow-lg p-10  hover:bg-purple-300">
            <span onClick={()=>navigate('/join')} className="text-purple-600 text-2xl font-bold cursor-pointer">Chat.</span>
          </div>
          <button className=" cursor-pointer bg-green-200 hover:bg-green-300 text-gray-700 font-bold py-2 px-4 rounded-lg shadow-md">
           
          </button>
          <button className= " cursor-pointer bg-yellow-200 hover:bg-yellow-300 text-gray-700 font-bold py-2 px-4 rounded-lg shadow-md">
           
          </button>
          {/* Translation Button */}
          <div onClick={()=>navigate('/translator')} className="bg-green-200 rounded-lg shadow-lg p-10  hover:bg-green-300">
            <img
              
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1024px-Google_Translate_logo.svg.png"
              alt="Translate"
              className="w-12 h-12 mx-auto cursor-pointer"
            />
          </div>

         
          <div className="bg-purple-200 hover:bg-purple-300 rounded-lg shadow-lg p-10">
            <span onClick={()=>navigate('/faq')} className="text-blue-800 text-2xl font-bold cursor-pointer">FAQs</span>
          </div>

          
          <div className="bg-pink-200 rounded-lg hover:bg-pink-300 shadow-lg p-10">
            <span onClick={()=>navigate('/about')} className="text-purple-600 text-2xl font-bold cursor-pointer">About</span>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Home;