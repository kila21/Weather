import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";
import { useState } from "react";

export const Search = (props: { findCityInfo: (str: string) => void }) => {
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
          onClick={() => (city ? props.findCityInfo(city) : null)}
        />
      </div>
    </div>
  );
};
