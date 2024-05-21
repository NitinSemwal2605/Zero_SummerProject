// src/EnquiryPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnquiryPage = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/booking');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-black rounded-lg shadow-lg">
        <div className="text-right">
          <button onClick={handleReturnClick} className="text-green-400 hover:text-green-300">
            return
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-green-400">Email</label>
            <input 
              type="email" 
              placeholder="John Doe" 
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
          </div>
          <div>
            <label className="block text-green-400">Choose A Service</label>
            <select className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Sell My Property</option>
              <option>Help to Buy Flat</option>
              <option>Interested in Your Property</option>
            </select>
          </div>
          <div>
            <label className="block text-green-400">Message</label>
            <textarea 
              placeholder="Enter your message here" 
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400" 
              rows="4">
            </textarea>
          </div>
          <div>
            <button type="submit" className=" w-40 px-4 py-2 mt-2 text-green-400 bg-black-500 rounded border focus:outline-none focus:ring-2 focus:ring-green-400">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPage;
