import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import Banner from "./components/Banner/index.js";
import Home from "./pages/Home/index.js";
import ErrorPage from "./pages/Erreur/index.js";
import './App.css';


function App() {
  return (
    <React.StrictMode>
      <Router>
        {/* <div className="mouse--follower"></div> */}
        {/* <Banner /> */}
        <Routes>
          <Route path="/" element={
          <Home 
          // templates={templates} 
          />
          } />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Foot />  */}
      </Router>
    </React.StrictMode>
  );
}

export default App;
