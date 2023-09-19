import React from "react";
import logo from "./logo.svg";
import "./App.css";
import head from "./head.svg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Liu's Hage {"<3 <3 <3"} </h1>
        <img src={head} width={"100vw"} alt="head svg" />
        <div
          style={{ width: "250px", backgroundColor: "white", height: "250px" }}
        />
      </header>
    </div>
  );
}

export default App;
