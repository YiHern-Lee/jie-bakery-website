import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Location from './components/pages/location/Location';
import AboutUs from './components/pages/about-us/AboutUs';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/about-us' exact element={ <AboutUs /> } />
            <Route path='/location' exact element={ <Location /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
