# 🌦️ Weather Now

A simple and responsive weather application built using **React**, **Vite**, **Tailwind CSS**, and **Axios**.  
It allows users to search for any city and instantly view its current weather conditions using the **Open-Meteo API**.

---

## 🚀 Live Demo

🔗 [View Live App](#)  
(*Replace this link with your CodeSandbox, Netlify, or Vercel deployment link.*)

---

## 🎯 Project Overview

**Weather Now** helps users quickly check the current weather for any city.  
This project was built as part of the **UI Take-Home Challenge**, focusing on:
- Understanding and interpreting user needs.
- Designing a simple, clean UI.
- Integrating real-world public APIs.
- Demonstrating good coding structure and practices.

---

## 🧠 Features

✅ Search weather by city name  
✅ Fetch live weather data (temperature, wind speed, direction)  
✅ Error handling for invalid or unknown cities  
✅ Responsive layout for desktop and mobile  
✅ Minimal and clean UI design  
✅ Graceful loading state  

---

## 🧰 Tech Stack

| Category | Tools |
|-----------|--------|
| **Frontend Framework** | [React (Vite)](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **API** | [Open-Meteo API](https://open-meteo.com/) |


This structure keeps the project modular, scalable, and easy to maintain.

---

## 🗂️ Folder Structure

src/
├── api/
│ └── weather.js # All API calls (Geo + Weather)
│
├── components/
│ ├── SearchBar.jsx
│ ├── WeatherCard.jsx
│ ├── Loader.jsx
│ └── ErrorMessage.jsx
│
├── utils/
│ └── formatWeatherData.js # Data formatting helpers
│
├── App.jsx
└── main.jsx

---

## ⚙️ Setup & Installation

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/weather-now.git
cd weather-now

# Install dependencies
npm install

# Start the development server
npm run dev


🌍 API Details

1. Geocoding API (Open-Meteo):
Used to fetch latitude and longitude for the searched city.

https://geocoding-api.open-meteo.com/v1/search?name={cityName}


2. Weather API (Open-Meteo):
Used to fetch current weather data based on coordinates.

https://api.open-meteo.com/v1/forecast?current_weather=true&latitude={lat}&longitude={lon}

🧩 Key Components
🔹 SearchBar.jsx

Handles user input and triggers the weather search.

🔹 WeatherCard.jsx

Displays weather details such as temperature, wind speed, and condition.

🔹 Loader.jsx

Displays a loading indicator when data is being fetched.

🔹 ErrorMessage.jsx

Shows an error message if a city is not found or a network error occurs.

🧠 Data Flow

User enters a city name in SearchBar.

The app fetches coordinates → weather data from Open-Meteo.

Data is formatted using formatWeatherData.js.

The formatted data is displayed in WeatherCard.

🧹 Code Practices

Modular architecture for scalability.

Reusable UI components.

Clear separation of API, UI, and utility layers.

Clean, readable, and commented code.

Error and loading states handled gracefully.

🧑‍💻 Author

Faisal Khan
Front-End Developer
📧 faishalkhan957@gmail.com
🌐 khanfaisal.vercel.app

🏁 Acknowledgements

Open-Meteo
 for free weather APIs

Lucide Icons
 for modern iconography

Tailwind CSS
 for effortless styling

Vite
 for fast React development

🧾 Challenge Context

This project was built as part of a UI Take-Home Challenge for evaluating:

Problem understanding

Design interpretation

Implementation clarity

Coding practices