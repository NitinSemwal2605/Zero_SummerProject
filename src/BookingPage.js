// src/BookingPage.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import './customCalendar.css'; // Custom styles to match Tailwind CSS design

const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const [medium, setMedium] = useState('Virtual');
  const [slot, setSlot] = useState('12:00');
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/result');
  };

  const handleMediumChange = (newMedium) => {
    setMedium(newMedium);
  };

  const handleSlotChange = (newSlot) => {
    setSlot(newSlot);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-5xl p-8 space-y-6 bg-black rounded-lg shadow-lg">
        <div className="text-right">
          <button onClick={handleReturnClick} className="text-green-400 hover:text-green-300 ">
            return
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl text-green-400 mb-4">
              A-NORTH-51 - a luxurious 2bhk flat in NORTH COLONY Project
            </h2>
            <p className="text-gray-400 mb-4">...Show More</p>
            <div className="mb-4">
              <label className="block text-green-400 mb-2">What medium?</label>
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded ${medium === 'Virtual' ? 'bg-green-400 text-black' : 'bg-gray-700 text-green-400'}`}
                  onClick={() => handleMediumChange('Virtual')}
                >
                  Virtual
                </button>
                <button
                  className={`px-4 py-2 rounded ${medium === 'Property Visit' ? 'bg-green-400 text-black' : 'bg-gray-700 text-green-400'}`}
                  onClick={() => handleMediumChange('Property Visit')}
                >
                  Property Visit
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-green-400 mb-2">What day?</label>
              <Calendar
                onChange={setDate}
                value={date}
                className="bg-gray-900 text-green-400"
              />
            </div>
            <div>
              <label className="block text-green-400 mb-2">What slot?</label>
              <div className="flex space-x-4">
                {['9:00', '12:00', '15:00'].map((time) => (
                  <button
                    key={time}
                    className={`px-4 py-2 rounded ${slot === time ? 'bg-green-400 text-black' : 'bg-gray-700 text-green-400'}`}
                    onClick={() => handleSlotChange(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-green-400">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-green-400">Contact</label>
              <input
                type="text"
                placeholder="johndoe64@gmail.com / +1 54X X6X X"
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-green-400">Create A Password</label>
              <input
                type="password"
                placeholder="************"
                className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <button type="submit" className="w-40 px-4 py-2 mt-2 text-green-400 bg-black-500 rounded border focus:outline-none focus:ring-2 focus:ring-green-400">
                Book Slot
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
