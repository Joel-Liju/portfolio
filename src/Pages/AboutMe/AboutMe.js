import React, {useEffect, useState} from 'react';
import './AboutMe.css';

function Aboutme() {
const [data, setData] = useState(null);
const [gotData, setGotData] = useState(false);
useEffect(()=>{
  if(!gotData){
  fetch("https://api.nasa.gov/planetary/apod?api_key=R4yBRklQtUgGSiX9Cym0ssaygOc26FQlrPqYkvFP")
  .then((res)=>res.json())
  .then((json)=>{
    setData(json)
  })
  .then(()=> setGotData(true));
}
},[data]);
  return (
    <div id="aboutme" className='aboutme'>
      Hi again
      I have already said my name, but just for consistency
      <h1>
        About Joel Jacob
      </h1>
      <h2>
        Education
      </h2>
      <p>
        I am currently studying at Brock University Majoring in Computer Science with a Minor In Economics cause why not.
      </p>
      <h2>
        Interests
      </h2>
      <ul>
        <li>
          3-d Graphics
        </li>
        <li>
          Data Structures
        </li>
        <li>
          Algorithms
        </li>
        <li>
          Software Development
        </li>
        <li>
          Buzz words
        </li>
      </ul>
      {
        gotData?<img src={data?.url} />:<></>
      }
      
      
    </div>
  );
}

export default Aboutme;