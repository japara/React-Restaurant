import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { Context } from "./Context";

let data = require("./data.json");

function App() {
  const [info, setInfo] = useState(data); //food data for menu
  const [cartNumber, setCartNumber] = useState(0); // cart number 0

  function increaseCartNumber() {
    setCartNumber((prevCartNumber) => prevCartNumber + 1);
  }

  return (
    <Context.Provider
      value={{
        productInfo: info,
        cartNumber: cartNumber,
      }}
    >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route
            path="/menu"
            element={<Menu addNumber={increaseCartNumber} />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
