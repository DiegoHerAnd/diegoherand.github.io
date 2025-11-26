import React from "react";
import Card from "./components/Card";
import { arquitecturas } from "./components/data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="titulo">Modelo MVVM</h1>
      <div className="container">
        {arquitecturas.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
