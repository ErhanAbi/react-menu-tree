import React from "react";
import { dataModel } from "./menuOptions";

import { Menu } from "react-menu-tree";

import "./App.css";

const currentLocation = () => document.location.pathname;

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header centered-content">Header...</div>
      <div className="App-sidebar">
        <Menu options={dataModel} selectedOption={currentLocation()} />
      </div>
      <div className="App-content centered-content">Content...</div>
    </div>
  );
};

export default App;
