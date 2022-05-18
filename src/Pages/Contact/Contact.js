import './Contact.css';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';

function Contact() {
  return (
    <table id='contact'>
      <tbody>
      <tr className='linkitems'>
        <th className='linkitem'>
          <p>Email me</p>
          <a href='mailto: joelliju10@gmail.com'><Envelope size='5%'/> </a>
        </th>
        <th className='linkitem'>
        <p>Check out my GitHub</p>
          <a href='https://github.com/Joel-Liju'><Github size='5%'/></a>
        </th>
        <th className='linkitem'>
          <p>Connect with me on Linkedin</p>
          <a href='https://www.linkedin.com/in/joel-liju-jacob/'><Linkedin size='5%'/></a>
        </th>
      </tr>
      </tbody>
    </table>
    
  );
}

export default Contact;