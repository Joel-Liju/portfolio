import './Homepage.css';
import {useEffect, useState} from 'react';

function Homepage() {
  const [scrollPosition, setScrollPosiition] = useState(0);
  const handleScroll = () =>{
    const position = window.scrollY;
    setScrollPosiition(position);
    // var rs = getComputedStyle(r);
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    
    return () =>{
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);
  // console.log(scrollPosition);
  const t1 = document.getElementById('homecontent');
  const t2 = document.getElementById('triangles');
  // const f1 = document.getElementById('pagecontent');
  if(scrollPosition > 50){//if the scroll value is greater than 10
    t1.style.setProperty('--visibility','0%');
    t2.style.setProperty('--width','var(--margins)');
    // f1.style.setProperty('--visibility','100%');
  }
  else if(t1){//ensuring r did load, back to original
    t1.style.setProperty('--visibility','100%');
    t2.style.setProperty('--width','80vw');
    // f1.style.setProperty('--visibility','0%');
  }
  
  // r.style.setProperty('--visibility', ((scrollPosition/500)-100)+"%")
  //   r.style.setProperty('--rotation',scrollPosition+'deg');
  //   console.log(getComputedStyle(r).getPropertyValue('--rotation'))
  return (
    <div id="homepage">
      <div id='homecontent' className = "homecontent">
          <h1>
            Welcome <span className='dot1'>.</span>   <span className='dot2'>.</span>   <span className='dot3'>.</span>
          </h1> 
          <p>
            My Name is Joel Liju Jacob, and I will be your guide to this website. Partly because it is my website.
            I am a Comedian as you can tell, but also a problem solver maybe, but enough about me, so let's check out, well... about me.
          </p>
      </div>
    </div>
  );
}

export default Homepage;