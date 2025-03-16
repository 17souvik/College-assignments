import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "52a50d944c8a1b1f03d51af87fd660a8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather App</h1>
      <div className="weather-input-container">
        <input
          type="text"
          placeholder="Enter city"
          className="weather-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="weather-button" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>
      {error && <p className="weather-error">{error}</p>}
      {weather && (
        <div className="weather-card">
          <h2 className="weather-city">{weather.name}</h2>
          <p className="weather-description">{weather.weather[0].description}</p>
          <p className="weather-temp">Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
