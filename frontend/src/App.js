import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import MonitoringPage from './pages/MonitoringPage';
import AddPlantPage from './pages/AddPlantPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monitoring" element={<MonitoringPage />} />
            <Route path="/add-plant" element={<AddPlantPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
