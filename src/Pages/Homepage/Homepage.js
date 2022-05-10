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
  const r = document.getElementById('navbar');
  const t1 = document.getElementById('triangle');
  const t2 = document.getElementById('triangle2');
  if(scrollPosition > 100){//if the scroll value is greater than 10
    r.style.setProperty('--navcolor',"#E01A4F");
    t1.style.setProperty('--visibility','0%')
    t2.style.setProperty('--visibility','0%')
  }
  else if(r){//ensuring r did load, back to original
    r.style.setProperty('--navcolor',"#077187");
    t1.style.setProperty('--visibility','100%')
    t2.style.setProperty('--visibility','100%')
  }
  
  // r.style.setProperty('--visibility', ((scrollPosition/500)-100)+"%")
  //   r.style.setProperty('--rotation',scrollPosition+'deg');
  //   console.log(getComputedStyle(r).getPropertyValue('--rotation'))
  return (
    <div id="homepage">
      <div className = "homecontent">
          <h1>
            Welcome . . .
          </h1>
          <p>
            My Name is Joel Liju Jacob, and I will be your guide to this website. Partly because it is my website.
            I am a Comedian as you can tell, but also a problem solver maybe, but enough about me, let so check out, well... about me.
          </p>
      </div>
      <div>
        <div id = 'triangle' className='triangle' />
        <div id = 'triangle2' className='triangle2' />
      </div>
    </div>
  );
}

export default Homepage;