import "./Weather.css";
import { WeatherIcon } from "./WeatherIcon";

export const Weather = () => {
  return (
    <div className="weather-container">
      <h1>Rustavi</h1>
      <h3>Clear Sky</h3>

      <div className="weather-content">
        <WeatherIcon size={60} />

        <div className="weather-temperature">
          22 <span>°C</span>
        </div>

        <div className="weather-info">
          <span>
            real feel:{" "}
            <span className="weather-span__whiter">
              21{" "}
              <span style={{ verticalAlign: "super", fontSize: "0.8rem" }}>
                °
              </span>
            </span>
          </span>
          <span>
            humidicity: <span className="weather-span__whiter">34%</span>
          </span>
          <span>
            Wind: <span className="weather-span__whiter">4 km/h</span>
          </span>
        </div>
      </div>

      <div className="temp-high-low">
        <div>
          High: <span className="weather-span__whiter">22</span>
        </div>
        |
        <div>
          Low: <span className="weather-span__whiter">21</span>
        </div>
      </div>
    </div>
  );
};
