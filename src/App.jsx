import React, { useState, useRef } from "react";
import "./css/App.css";
import "./css/header.css";
import "./css/main.css";

import Write from "./write/Write";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";

export const textValue = createContext([]);
export const functions = createContext(null);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "write",
    element: <Write />,
  },
]);
function App() {
  const [writeText, setWriteText] = useState([]);
  let num = useRef(1);
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const dateStr = `${year}-${month}-${day}`;

  function writeTextSave(text) {
    setWriteText([
      ...writeText,
      { number: num.current++, date: dateStr, ...text },
    ]);
  }

  return (
    <div className="App">
      <functions.Provider value={writeTextSave}>
        <textValue.Provider value={writeText}>
          <RouterProvider router={router} />
        </textValue.Provider>
      </functions.Provider>
    </div>
  );
}

export default App;
