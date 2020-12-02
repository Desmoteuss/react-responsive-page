import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './components/pages/HeroSection';

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
    </Router>
  );
}
export default App;
