import './Homepage.css';
import {useEffect, useState} from 'react';

function Homepage() {
  const [scrollPosition, setScrollPosiition] = useState(0);
  const handleScroll = () =>{
    const position = window.scrollY;
    setScrollPosiition(position);
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    
    return () =>{
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);
  const t1 = document.getElementById('homecontent');
  const t2 = document.getElementById('triangles');
  if(scrollPosition > 50){//if the scroll value is greater than 10
    t1.style.setProperty('--visibility','0%');
    t2.style.setProperty('--width','var(--margins)');
  }
  else if(t1){//ensuring r did load, back to original
    t1.style.setProperty('--visibility','100%');
    t2.style.setProperty('--width','80vw');
  }
  return (
    <div id="homepage">
      <div id='homecontent' className = "homecontent">
          <h1>
            Welcome <span className='dot1'>.</span>   <span className='dot2'>.</span>   <span className='dot3'>.</span>
          </h1> 
          <p>
            My name is Joel Liju Jacob, and I will be your guide to this website. Partly because it is my website.
            I am a Comedian as you can tell, but while I am not joking around, I like to code a lot and you can see some of my projects in the projects section. However, I hope your stay is as fun as it was for me making this.
          </p>
      </div>
    </div>
  );
}

export default Homepage;