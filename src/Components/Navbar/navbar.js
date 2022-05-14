import './navbar.css'
function Navbar() {
  return (
    <div>
      <ul id = 'navbar' className='navbar'>
        <li className='homelink link'>
          <a id='item' href='#homepage'>Home</a>
        </li>
        <li className='link'>
          <a id='item' href='#aboutme'>About Me</a>
        </li>
        <li className='link'>
          <a id='item' href='#projects'>Projects</a>
        </li>
        <li className='link'>
          <a id='item' href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
