import axios from "axios";

const GEO_API = "https://geocoding-api.open-meteo.com/v1/search?name=";
const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?current_weather=true";

// Get city coordinates
export async function fetchCoordinates(city) {
  try {
    const { data } = await axios.get(`${GEO_API}${city}`);
    // console.log(data);
    if (!data.results || data.results.length === 0) {
      throw new Error("City not found");
    }
    return data.results[0];
  } catch (error) {
    console.error("Error fetching coordinates:", error.message);
    throw error;
  }
}

// Get weather using latitude & longitude
export async function fetchWeather(lat, lon) {
  try {
    const { data } = await axios.get(
      `${WEATHER_API}&latitude=${lat}&longitude=${lon}`
    );
    // console.log(data);
    return data.current_weather;
  } catch (error) {
    console.error("Error fetching weather:", error.message);
    throw error;
  }
}