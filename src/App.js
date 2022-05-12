import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import GetStarted from './Components/Portfolio/GetStarted';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/getStarted" element={<GetStarted />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
