import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar/navbar.js';
import Homepage from './Pages/Homepage/Homepage';
import AboutMe from './Pages/AboutMe/AboutMe'
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <Homepage />
    <AboutMe />
    <Projects />
    <Contact />
  </>
 
);

