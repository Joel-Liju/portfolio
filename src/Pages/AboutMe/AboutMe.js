import './AboutMe.css';

function Aboutme() {
// const [data, setData] = useState(null);
// const [gotData, setGotData] = useState(false);
// useEffect(()=>{
//   if(!gotData){
//   fetch("https://api.nasa.gov/planetary/apod?api_key=R4yBRklQtUgGSiX9Cym0ssaygOc26FQlrPqYkvFP")
//   .then((res)=>res.json())
//   .then((json)=>{
//     setData(json)
//   })
//   .then(()=> setGotData(true));
// }
// },[data,gotData]);
  return (
    <div id="aboutme" className='aboutme'>
      <h1>
        About Myself
      </h1>
      <p>
        I am an aspiring Computer Science Student, who loves to learn new technologies. Always curious about things, and always tries to better myself.
        My biggest strengths would be my willingness to learn. Below you can read some of my interest in general and my Computer Science Interests. The reason why I choose this field is because I love problem solving, and trying to create new tools to help others.
      </p>
      <h2>
        Interests
      </h2>
      <ul>
        <li>
          Space
        </li>
        <li>
          Puzzles
        </li>
        <li>
          Video Games
        </li>
        <li>
          Table top games (Especially DND)
        </li>
      </ul>
      <h2>Computer Science Interests</h2>
      <ul>
        <li>
          Full Stack Development
        </li>
        <li>
          Algorithms
        </li>
        <li>
          Block Chain
        </li>
        <li>
          Machine Learning
        </li>
        <li>
          Data Science
        </li>
      </ul>
    </div>
  );
}

export default Aboutme;