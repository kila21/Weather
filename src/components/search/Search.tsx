import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";
import { useState } from "react";

export const Search = (props: any) => {
  const [city, setCity] = useState<null | string>(null);

  return (
    <div className="search-container">
      <input
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Search a City here"
        autoComplete="off"
      />
      <div className="search-icon">
        <FontAwesomeIcon
          icon={faSearch}
          onClick={() => props.findCityInfo(city)}
        />
      </div>
      <div className="temperature-units">
        <span>C</span>|<span>F</span>
      </div>
    </div>
  );
};
