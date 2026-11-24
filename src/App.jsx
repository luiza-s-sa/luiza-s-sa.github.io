import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
