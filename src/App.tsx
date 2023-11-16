import { useEffect } from "react";
// import axios from "axios";

import { Search } from "./components/search/Search";
import { Header } from "./components/header/Header";
import { Weather } from "./components/weather/Weather";

import "./App.css";
import { Forecast } from "./components/forecast/Forecast";

function App() {
  const newDate = new Date();
  // const apikey = import.meta.env.VITE_API_KEY;
  // const api = `https://api.openweathermap.org/geo/1.0/direct?q=rustavi&appid=${apikey}`;

  useEffect(() => {
    // axios.get(api).then((dat) => {
    //   console.log(dat);
    // });
    // console.log(apikey);
  }, []);
  return (
    // layout
    <div className="main-container">
      <Header />
      <Search />
      <div className="date">
        {newDate.toLocaleString("en-US", { weekday: "long" })},
        {newDate.getDate()} &nbsp;
        {newDate.toLocaleString("en-US", { month: "long" })} &nbsp;
        {newDate.getFullYear()} &nbsp;| &nbsp; Local time: {newDate.getHours()}:
        {newDate.getMinutes()}
      </div>
      <Weather />
      <div className="forecasts-container">
        <Forecast />
      </div>
    </div>
  );
}

export default App;
