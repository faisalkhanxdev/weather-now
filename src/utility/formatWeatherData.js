export function formatWeatherData(weather, city) {
  const { temperature, windspeed, weathercode } = weather;

  let condition = "Clear";
  let emoji = "☀️";
  
  if (weathercode < 3) {
    condition = "Clear";
    emoji = "☀️";
  } else if (weathercode < 60) {
    condition = "Cloudy";
    emoji = "🌤️";
  } else {
    condition = "Rainy";
    emoji = "🌧️";
  }

  return {
    city,
    temp: temperature,
    wind: windspeed,
    condition,
    emoji,
    weathercode,
  };
}