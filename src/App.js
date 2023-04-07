import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Performance from "./Components/Performance";
import Prediction from "./Components/Prediction";
import { useState, useEffect } from "react";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </Router>
  );
}

export default App;
