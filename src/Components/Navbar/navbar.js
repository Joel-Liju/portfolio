import './navbar.css'
function Navbar() {
  return (
    <ul className='navbar'>
      <li className='homelink'>
        <a href='#homepage'>Home</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#aboutme'>About Me</a>
      </li>
    </ul>
  );
}

export default Navbar;
