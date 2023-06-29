import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
export default function Header({ headerInputChange }) {
  return (
    <div className="header">
      <div className="middleHeader">
        <form
          className="middleHeaderForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="middleHeaderInput"
            onChange={(e) => {
              headerInputChange(e.target.value);
            }}
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
