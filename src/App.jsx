import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Search } from "./Search";

const App = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  const searchCity = async (city) => {
    try {
      const api_key = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      setWeatherData({
        location: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchCity("Kathmandu");
  }, []);

  return (
    <>
      <div className="grid m-10 justify-center">
        <Search search={searchCity} />
        <Card weatherData={weatherData} />
      </div>
    </>
  );
};

export default App;
