import React, { useState } from "react";
import "./App.css";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (query.toLowerCase() === "2 bhk residential flat") {
      setResults([
        {
          id: 1,
          price: "$750K",
          img: pic1,
          description:
            "A-NORTH-51 - a luxurious 2bhk flat in NORTH COLONY Project",
        },
        {
          id: 2,
          price: "$750K",
          img: pic2,
          description:
            "A-NORTH-51 - a luxurious 2bhk flat in NORTH COLONY Project",
        },
        {
          id: 3,
          price: "$750K",
          img: pic3,
          description:
            "A-NORTH-51 - a luxurious 2bhk flat in NORTH COLONY Project",
        },
      ]);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4 mt-20 ml-64 w-full">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded bg-gray-800 text-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="bg-black-100 py-2 px-4 rounded-lg border text-green-500">Search</button>
        </div>
        <button className="text-gray-300 border p-2 rounded ">North Colony</button>
      </div>
      {results.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="lg:col-span-2 flex flex-wrap justify-center ">
            <div className="w-full lg:w-1/3 p-2 relative h-1/2">
              <img
                src={results[0].img}
                alt={results[0].description}
                className="rounded w-full h-full"
              />
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 rounded-tr-lg">
                {results[0].price}
              </div>
              <div className="text-sm mt-4">{results[0].description}</div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col justify-between gap-2 h-1/2">
              {/* <button className="text-gray-300 border p-2 rounded self-end -mt-12">North Colony</button> */}
              <div className="p-2">
                <img
                  src={results[1].img}
                  alt={results[1].description}
                  className="rounded w-full h-1/2"
                />
              </div>
              <div className="p-2">
                <img
                  src={results[2].img}
                  alt={results[2].description}
                  className="rounded w-full h-1/2 -mt-56 "
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-green-600 px-4 py-2 rounded">
                  Book a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
