import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Developers from "./pages/Developers.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="developers" element={<Developers />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
