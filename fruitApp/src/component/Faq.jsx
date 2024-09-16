import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  // Fetch FAQs from the backend
  useEffect(() => {
    axios.get('http://localhost:3000/faqs')
      .then(response => setFaqs(response.data.data))
      .catch(error => console.error(error));
  }, []);
console.log(faqs);
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d7b9ff] via-[#c1d3fe] to-[#99effd] p-6 ">
       <h2 className="text-2xl font-bold text-white text-center mb-4">
        FaQ Section
      </h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {faqs.length > 0 ? (
          faqs.map(faq => (
            <div key={faq._id} className="bg-white shadow-lg rounded-lg p-5">
              <img src={`${faq.image}`} alt={faq.fruit} className="w-full h-40 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-4 text-red-500">{faq.fruit}</h2>
              <p className="text-red-500 mt-2 font-bold"> {faq.question}</p>
              <p className="text-blue-600 mt-2 font-semibold"> {faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No FAQs available</p>
        )}
      </div>
    </div>
  );
};

export default Faq;
