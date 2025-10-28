import React from "react";
import { Wind, Gauge } from "lucide-react";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 mt-8 animate-fadeIn">
      <div className="relative group">
        <div className="relative backdrop-blur-2xl bg-black/15 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="backdrop-blur-2xl bg-black/5 p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">
                  {weatherData.city}
                </h2>
                <p className="text-white/70 text-sm">
                  Current Weather
                </p>
              </div>
              <div className="text-5xl ">
                {weatherData.emoji}
              </div>
            </div>
          </div>

          {/* Main Temperature */}
          <div className="p-6 text-center">
            <div className="mb-6">
              <div className="text-7xl font-bold text-white mb-2">
                {Math.round(weatherData.temp)}°C
              </div>
              <div className="text-xl  text-white/80 font-medium">
                {weatherData.condition}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4  border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center space-y-2">
                  <Wind className="w-6 h-6  text-blue-400" />
                  <p className="text-white/60 text-xs ">Wind Speed</p>
                  <p className="text-xl  font-bold text-white">
                    {weatherData.wind} <span className="text-white/50 text-xs">km/h</span>
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center space-y-2">
                  <Gauge className="w-6 h-6 text-purple-400" />
                  <p className="text-white/60 text-xs ">Conditions</p>
                  <p className="text-xl  font-bold text-white">
                    {weatherData.weathercode} <span className="text-white/50 text-xs">code</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeatherCard;