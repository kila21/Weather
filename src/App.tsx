import { useEffect } from "react";
// import axios from "axios";

import { Search } from "./components/search/search";
import { Header } from "./components/header/Header";

import "./App.css";

function App() {
  // const apikey = import.meta.env.VITE_API_KEY;

  // const api = `https://api.openweathermap.org/geo/1.0/direct?q=rustavi&appid=${apikey}`;
  const newDate = new Date();

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
    </div>
  );
}

export default App;
