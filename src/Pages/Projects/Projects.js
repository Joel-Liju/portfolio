import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
import ProjectsDetails from './ProjectsDetails';

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <Carousel>
        {
          ProjectsDetails.map((val)=>{
            return (
            <Carousel.Item
              className='projectsdeck'
            >
              <img width='50%' src={val.imageURL} />
              <Carousel.Caption className='projectsdeckcontent'>
                <h3>Topic : {val.name}</h3>
                <div>Description : {val.desc}</div>
                <div>Tools Used : {val.toolsused}</div>
              </Carousel.Caption>
            </Carousel.Item>
            )
          })
        }
      </Carousel>
      </div>
  );
}

export default Projects;