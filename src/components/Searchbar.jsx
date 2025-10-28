import React, { useState } from "react";
import { Search } from "lucide-react";

const Searchbar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim() || isLoading) return;
    onSearch(city.trim());
    setCity("");
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="relative group">
        <div className="relative flex items-center backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit(e);
            }}
            type="text"
            placeholder="Search for a city..."
            disabled={isLoading}
            className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-white placeholder-white/60 text-base sm:text-lg disabled:opacity-50"
          />
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="m-2 p-3 sm:p-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <Search size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;