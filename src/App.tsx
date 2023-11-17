import { useState, useEffect } from "react";
import axios from "axios";
// import axios from "axios";

import { Search } from "./components/search/Search";
import { Weather } from "./components/weather/Weather";
import { Forecast } from "./components/forecast/Forecast";

import { WeatherData } from "./types/WeatherDataType";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null);
  const newDate = new Date();

  const findCityInfo = async (city: string) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    // const api = `https://api.openweathermap.org/geo/1.0/direct?q=rustavi&appid=${apikey}`;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    await axios.get(api).then((res) => {
      setWeatherData({
        name: res.data.name,
        feels_like: res.data.main.feels_like,
        temp_max: res.data.main.temp_max,
        temp_min: res.data.main.temp_min,
        humidity: res.data.main.humidity,
        temperature: res.data.main.temp,
        description: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        country: res.data.sys.country,
        wind: res.data.wind.speed,
        timezone: res.data.timezone,
        date: new Date(res.data.dt * 1000),
        coord: res.data.coord,
      });
    });
  };

  useEffect(() => {
    findCityInfo("Rustavi");
  }, []);
  return (
    // layout
    <div className="main-container">
      <Search findCityInfo={findCityInfo} />
      <div className="date">
        {newDate.toLocaleString("en-US", { weekday: "long" })},
        {newDate.getDate()} &nbsp;
        {newDate.toLocaleString("en-US", { month: "long" })} &nbsp;
        {newDate.getFullYear()} &nbsp;| &nbsp; Local time: {newDate.getHours()}:
        {newDate.getMinutes()}
      </div>
      {weatherData && (
        <Weather
          name={weatherData?.name}
          temperature={weatherData?.temperature}
          high={weatherData?.temp_max}
          low={weatherData?.temp_min}
          humidicity={weatherData?.humidity}
          wind={weatherData?.wind}
          feels_like={weatherData?.feels_like}
          description={weatherData?.description}
          icon={weatherData?.icon}
        />
      )}

      {weatherData?.coord && (
        <Forecast lat={weatherData.coord.lat} lon={weatherData.coord.lon} />
      )}
    </div>
  );
}

export default App;
