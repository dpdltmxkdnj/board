import React, { useState, useContext } from "react";
import "./css/App.css";
import "./css/header.css";
import "./css/main.css";
import Main from "./home/Main";
import Header from "./home/Header";
import { textValue } from "./App";
function Home() {
  const texts = useContext(textValue);

  const [mainText, setMainText] = useState(texts);

  function headerInputChange(textInput) {
    if (textInput === "") {
      setMainText(texts);
    } else {
      setMainText(texts.filter((text) => text.caption === textInput));
    }
  }
  return (
    <div className="Home">
      <Header headerInputChange={headerInputChange} />
      <Main mainText={mainText} />
    </div>
  );
}

export default Home;
