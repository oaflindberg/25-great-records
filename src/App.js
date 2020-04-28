import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Single from "./Pages/Single";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Single path="record/:slug" />
      </Router>
    </div>
  );
}

export default App;
