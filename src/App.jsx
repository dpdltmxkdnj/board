import React, { useState, useRef } from "react";
import "./css/App.css";
import "./css/header.css";
import "./css/main.css";

import Write from "./write/Write";
import Home from "./Home";
import Text from "./Text";
import Modify from "./Modify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";

export const textValue = createContext([]);
export const functions = createContext(null);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "write",
      element: <Write />,
    },
    {
      path: "texts/:text",
      element: <Text />,
    },
    {
      path: "modifys/:modify",
      element: <Modify />,
    },
  ],
  {
    basename: `${process.env.PUBLIC_URL}`,
  }
);

function App() {
  const json = JSON.parse(localStorage.getItem("value"));
  const jsonValue = json || [];
  const jsonNum = json ? json[json.length - 1].number + 1 : 1;
  let num = useRef(jsonNum);
  const [writeText, setWriteText] = useState(jsonValue);

  console.log(JSON.parse(localStorage.getItem("value")));
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  const dateStr = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  async function writeTextSave(text) {
    const updatedWriteText = [
      ...writeText,
      { number: num.current, date: dateStr, ...text },
    ];
    num.current += 1;
    setWriteText(updatedWriteText);

    localStorage.setItem("value", JSON.stringify(updatedWriteText));
  }
  function modifyText(text) {
    const modifyTexts = writeText.map((t) => {
      if (t.number === text.number) {
        return {
          ...t,
          name: text.name,
          caption: text.caption,
          content: text.content,
        };
      } else {
        return { ...t };
      }
    });
    setWriteText(modifyTexts);
    localStorage.setItem("value", JSON.stringify(modifyTexts));
  }
  function removeText(text) {
    const removeTexts = writeText.filter((t) => t.number !== text.number);
    setWriteText(removeTexts);
    localStorage.setItem("value", JSON.stringify(removeTexts));
  }

  return (
    <div className="App">
      <functions.Provider value={{ writeTextSave, modifyText, removeText }}>
        <textValue.Provider value={writeText}>
          <RouterProvider router={router} />
        </textValue.Provider>
      </functions.Provider>
    </div>
  );
}

export default App;
