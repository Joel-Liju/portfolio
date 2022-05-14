import './Contact.css';
import { Envelope, Github } from 'react-bootstrap-icons';

function Contact() {
  return (
    <div id='contact'>
      <tr className='linkitems'>
        <th className='linkitem'>
          <Envelope />
        </th>
        <th className='linkitem'>
          <a href='https://github.com/Joel-Liju'><Github /></a>
        </th>
      </tr>
    </div>
    
  );
}

export default Contact;