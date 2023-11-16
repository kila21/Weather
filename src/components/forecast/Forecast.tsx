import { useEffect, useState } from "react";
import axios from "axios";
import { WeatherIcon } from "../weather/WeatherIcon";
import "./Forecast.css";
import { DailyType } from "../../types/DailyType";

export const Forecast = (props: { lat: number; lon: number }) => {
  const [daily, setDaily] = useState<DailyType[] | null>(null);
  const forecastArray = new Array(5).fill(null);
  // const apiKey = import.meta.env.VITE_API_KEY;
  const apiKey = "1fa9ff4126d95b8db54f3897a208e91c";

  // const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}`;
  const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    axios.get(api).then((dat) => {
      setDaily(dat.data.daily);
    });
  }, [api]);
  return (
    <div className="forecast-container">
      {daily &&
        forecastArray.map((item, index) => {
          forecastArray[item] = daily[item];
          const newDate = new Date(daily[index].dt * 1000);
          return (
            <div key={item + index} className="forecast">
              <h5>{newDate.toLocaleString("en-US", { weekday: "short" })}</h5>
              <WeatherIcon size={30} code={daily[index].weather[0].icon} />
              <div className="forecast-temp">
                <span className="high">{daily[index].temp.max}°</span>
                <span className="low">{daily[index].temp.min}°</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

{
  /* <div className="forecast">
      <h5>Mon</h5>
      <WeatherIcon size={30} />
      <div className="forecast-temp">
        <span className="high">25°</span>
        <span>17°</span>
      </div>
    </div> */
}
