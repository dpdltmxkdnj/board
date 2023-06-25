import React, { useState } from "react";
import "./css/App.css";
import "./css/header.css";
import "./css/main.css";
import Main from "./home/Main";
import Header from "./home/Header";

function Home() {
  const [inputValue, setInputValue] = useState("");

  function headerInputChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className="Home">
      <Header inputValue={inputValue} headerInputChange={headerInputChange} />
      <Main />
    </div>
  );
}

export default Home;
