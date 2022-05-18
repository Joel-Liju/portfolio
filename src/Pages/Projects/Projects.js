import './Projects.css';
import React,{useEffect, useState} from 'react';
import ProjectsDetails from './ProjectsDetails';
import {CircleFill} from 'react-bootstrap-icons';

function Projects() {
  function func(index){
    const t = document.getElementsByClassName('project')[index];
    if(t.style.getPropertyValue('--visibility')==='0%')
      t.style.setProperty('--visibility','100%');
    else
      t.style.setProperty('--visibility','0%');
  }
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div id = 'projectscontent' className='projectscontent'>
        {
          ProjectsDetails.map((val, index )=>{
            return <div id = 'project' className='project' key={index} onClick={()=>func(index)} style={{'--visibility':'0%'}}>
                  <div className='projectinner'>
                    <div className='projectfront'>
                      <h3>
                      {val.name}
                      </h3>
                      <img className='projectimage' src={val.imageURL} />
                      </div>
                      <p className='projectinfo'>
                       <p><span className='projecttitles'>Description</span> : {val.desc}</p>
                        <p><span className='projecttitles'>Tools used</span> : {val.toolsused}</p>
                      </p>
                      </div>
                    </div>      
          })
        }
      </div>
    </div>
  );
}

export default Projects;