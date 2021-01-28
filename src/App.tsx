import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import RollTheDice from "./components/RollTheDice";

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
    </header>
    <RollTheDice />
  </div>
);
