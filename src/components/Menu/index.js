import { Container, Nav, Navbar } from "react-bootstrap";

function Menu() {
  return (
    <Navbar className="mb-4" bg="light" variant="light" fixed="sticky">
      <Container>
        <Navbar.Brand>🎬</Navbar.Brand>
        <Nav className="mr-auto">
          {/* TODO: Replace with React Router Link */}
          <Nav.Link href="/">Main</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
