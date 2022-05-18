import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar/navbar.js';
import Homepage from './Pages/Homepage/Homepage';
import AboutMe from './Pages/AboutMe/AboutMe'
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import './Components/colors.css';
import './Components/spaces.css';
import './Components/fontsizes.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <Homepage />
    <div id = "triangles">
        <div id = 'triangle' className='triangle' />
        <div id = 'triangle2' className='triangle2' />
      </div>
    <div id='pagecontent' className='pagecontent'>
    <AboutMe />
    <Projects />
    </div>
    <Contact />
    
  </>
);

