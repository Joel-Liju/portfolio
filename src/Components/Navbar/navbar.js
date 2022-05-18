import './navbar.css'
import { HouseDoor, Book, PersonLinesFill, Search } from 'react-bootstrap-icons';
function Navbar() {
  return (
    <div>
      <ul id = 'navbar' className='navbar'>
        <li className='homelink link'>
          <a id='item' href='#homepage'> <p><HouseDoor /></p><p>Home</p></a>
        </li>
        <li className='link'>
          <a id='item' href='#contact'><p><PersonLinesFill /> </p><p>Contact</p></a>
        </li>
        <li className='link'>
          <a id='item' href='#projects'> <p><Book /></p><p>Projects</p></a>
        </li>
        <li className='link'>
          <a id='item' href='#aboutme'> <p><Search /></p><p>About Me</p></a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
