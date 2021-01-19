import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar className="mb-4" bg="light" variant="light" fixed="sticky">
      <Container>
        <Navbar.Brand>🎬</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Main
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
