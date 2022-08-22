
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './home.css';
import Slide from './slideshow';
import Home from './Home1';

function Front() {
  return (
    <body className='bod'>
    <div >
   
    <Home/>
    <Slide/>

    </div>
    </body>
  );
}

export default Front;