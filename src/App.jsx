import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Searchbar from "./components/Searchbar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { fetchCoordinates, fetchWeather } from "./api/weather";
import { formatWeatherData } from "./utility/formatWeatherData";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const coordinates = await fetchCoordinates(city);
      const weather = await fetchWeather(
        coordinates.latitude,
        coordinates.longitude
      );
      const formattedData = formatWeatherData(weather, coordinates.name);
      setWeatherData(formattedData);
    } catch (err) {
      setError(
        err.message === "City not found"
          ? "City not found. Please try another location."
          : "Failed to fetch weather data. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
          alt="City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 ">
        <div className="w-full max-w-4xl space-y-8">
          {/* Title */}
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-2xl">
              Weather Now
            </h1>
            <p className="text-lg text-white/70 font-light">
              Discover weather conditions worldwide
            </p>
          </div>

          {/* Search Bar */}
          <Searchbar onSearch={handleSearch} isLoading={isLoading} />

          {/* Content Area */}
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {weatherData && !isLoading && !error && (
            <WeatherCard weatherData={weatherData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
