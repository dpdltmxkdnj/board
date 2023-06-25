import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";

export default function Header({ inputValue, headerInputChange }) {
  return (
    <div className="header">
      <div className="middleHeader">
        <form className="middleHeaderForm">
          <input
            type="text"
            className="middleHeaderInput"
            value={inputValue}
            onChange={headerInputChange}
          ></input>

          <button className="middleHeaderButton">
            <IconContext.Provider
              value={{ className: "middleHeaderInputImage" }}
            >
              <BsSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
    </div>
  );
}
