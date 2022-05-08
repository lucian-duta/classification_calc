import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import CalcForm from "./components/CalcForm/CalcForm";
import CalculatorScreen from "./screens/CalculatorScreen";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CalculatorScreen />} />
        <Route path="/about" element={<CalcForm />} />
        <Route path="/contact" element={<CalcForm />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
