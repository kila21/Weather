import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";

export const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search a City here" autoComplete="off" />
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="temperature-units">
        <span>C</span>|<span>F</span>
      </div>
    </div>
  );
};
