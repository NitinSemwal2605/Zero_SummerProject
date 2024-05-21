import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PropertyPage = () => {
  const [requirements, setRequirements] = useState("");
  const history = useHistory();

  const handleAddLocation = () => {
    // Redirect to /results page with the entered requirements as query parameters
    history.push(`/results?requirements=${encodeURIComponent(requirements)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <header className="flex justify-between items-center w-full max-w-5xl p-4 fixed top-0 bg-black">
        <div className="text-2xl font-bold">a2zbrokerS</div>
        <div className="space-x-4">
          <button className="border border-white py-2 px-4 rounded-lg">
            Send Inquiry
          </button>
          <button className="border border-white py-2 px-4 rounded-lg">
            Sign in
          </button>
          <button
            className="bg-black-100 border border-white py-2 px-4 rounded-lg text-green-500"
            onClick={handleAddLocation}
          >
            NEW USER ?
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center mt-20  pl-8 ">
        <h1 className="text-4xl font-bold mb-4 top-3 fixed top-40 left-96">
          Buying <span className="text-green-500">a</span> property?
        </h1>
        <p className="mb-8 fixed top-60 left-96 ">
          Check all our listings right here
        </p>

        <div className="w-full max-w-3xl fixed mt-20 left-96">
          <div className="mb-4 flex items-center">
            <p className="flex-grow text-gray-300">
              RESIDENTIAL? COMMERCIAL? JUST ENTER YOUR NEEDS BELOW :)
            </p>
            <button
              className="bg-black-100 py-2 px-4 rounded-lg border text-green-500 "
              onClick={handleAddLocation}
            >
              ADD LOCATION
            </button>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="ENTER YOUR REQUIREMENTS HERE"
              className="flex-grow p-4 rounded-full bg-black text-white-500 border border-white-500"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyPage;
