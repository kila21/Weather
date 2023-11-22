import { WeatherCompPropsType } from "../../types/WeatherCompPropsType";
import "./Weather.css";
import { WeatherIcon } from "./WeatherIcon";

export const Weather = (props: WeatherCompPropsType) => {
  return (
    <div className="weather-container">
      <h1>
        {props.name}, {props.country}
      </h1>
      <h3>{props.description}</h3>

      <div className="weather-content">
        <WeatherIcon size={60} code={props.icon} />

        <div className="weather-temperature">
          {Math.round(props.temperature)} <span>°</span>C
        </div>

        <div className="weather-info">
          <span>
            real feel:{" "}
            <span className="weather-span__whiter">
              {Math.round(props.feels_like)}{" "}
              <span style={{ verticalAlign: "super", fontSize: "0.8rem" }}>
                °
              </span>
            </span>
          </span>
          <span>
            humidicity:{" "}
            <span className="weather-span__whiter">
              {Math.round(props.humidicity)}%
            </span>
          </span>
          <span>
            Wind:{" "}
            <span className="weather-span__whiter">
              {Math.round(props.wind)} km/h
            </span>
          </span>
        </div>
      </div>

      <div className="temp-high-low">
        <div>
          High:{" "}
          <span className="weather-span__whiter">
            {Math.round(props.high)}
            <span className="temp-span">°</span>
          </span>
        </div>
        |
        <div>
          Low:{" "}
          <span className="weather-span__whiter">
            {Math.round(props.low)}
            <span className="temp-span">°</span>
          </span>
        </div>
      </div>
    </div>
  );
};
