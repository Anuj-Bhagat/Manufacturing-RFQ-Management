import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./home.css";
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/Home">Manufacturing RFQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link> */}
            <NavDropdown title="Action" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/supplier">Supplier</NavDropdown.Item>
              <NavDropdown.Item href="/plant">Plant</NavDropdown.Item>
              <NavDropdown.Item href="/rfq">
                RFQ (Request For Quote)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
