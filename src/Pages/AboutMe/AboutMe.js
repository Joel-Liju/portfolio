import './AboutMe.css';

function Aboutme() {
  return (
    <div id="aboutme" className='aboutme'>
      <h1>
        About Myself
      </h1>
      <p>
        I am an inspried coder, who loves to learn new technologies and apply them to my everyday life. Always curious about things, and always tries to better myself.
        My biggest strengths would be my willingness to learn, but you know what they said, curiousity killed the cat. Below you can read more about myself.
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
                  Mathematics
                </li>
                <li>
                  Music
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  Uses Java, C, C++, Python, Javscript
                </li>
                <li>
                  Can and will sing
                </li>
                <li>
                  Quick learner
                </li>
                <li>
                  Eager to learn
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  Web Development
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
                Hobbies
              </h2>
            </th>
            <th>
              <h2>
                Games I play
              </h2>
            </th>
            <th>
              <h2>
                Most Weird Planets
              </h2>
            </th>
          </tr>
          <tr className='aboutcontent'>
            <td>
              <ul>
                <li>
                  Reading Books
                </li>
                <li>
                  Hiking
                </li>
                <li>
                  Video Games
                </li>
                <li>
                  Table top games (Especially DND)
                </li>
                <li>
                  Solving Rubix cubes
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  Rocket League
                </li>
                <li>
                  League of Legends
                </li>
                <li>
                  Chess
                </li>
                <li>
                  DND
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  J1407b
                </li>
                <li>
                  Gj-1214b
                </li>
                <li>
                  Gliese 436b
                </li>
                <li>
                  Hd 189733b
                </li>
                <li>
                  Psr B1620-26 B
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