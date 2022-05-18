import './AboutMe.css';

function Aboutme() {
  return (
    <div id="aboutme" className='aboutme'>
      <h1>
        About Myself
      </h1>
      <p>
        I am an aspiring Computer Science Student, who loves to learn new technologies. Always curious about things, and always tries to better myself.
        My biggest strengths would be my willingness to learn. Below you can read some of my interest in general and my Computer Science Interests. The reason why I choose this field is because I love problem solving, and trying to create new tools to help others.
      </p>
      <table className='abouttable'>
        <tbody className='abouttabledata'>
          <tr className='abouttitles'>
            <th>
              <h2>
                  General Interests
              </h2>
            </th>
            <th>
              <h2>
              Skills
              </h2>
            </th>
            <th>
            <h2>Computer Science Interests</h2>
            </th>
          </tr>
          
          <tr className='aboutcontent'>
            <td>
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
            </td>
            <td>
              <ul>
                <li>
                  cooking
                </li>
              </ul>
            </td>
            <td>
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
            </td>
          </tr>
          <tr className='abouttitles'>
            <th>
          <h2>
               General Interests
           </h2>
            </th>
            <th>
              <h2>
              Skills
              </h2>
              
            </th>
            <th>
            <h2>Computer Science Interests</h2>
            </th>
          </tr>
          <tr className='aboutcontent'>
            <td>
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
            </td>
            <th>
              <ul>
                <li>
                  cooking
                </li>
              </ul>
            </th>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    
    
  );
}

export default Aboutme;