import { WeatherIcon } from "../weather/WeatherIcon";
import "./Forecast.css";

export const Forecast = () => {
  return (
    <div className="forecast">
      <h5>Mon</h5>
      <WeatherIcon size={30} />
      <div className="forecast-temp">
        <span className="high">25°</span>
        <span>17°</span>
      </div>
    </div>
  );
};
