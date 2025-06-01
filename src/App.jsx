import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  </>
);

export default App;
