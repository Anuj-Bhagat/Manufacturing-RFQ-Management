
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './home.css';
import Slide from './slideshow';
function Home() {
  return (
    <div>
     
    <Navbar collapseOnSelect expand="lg"  className="Navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">Manufacturing RFQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link> */}
           
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default Home;