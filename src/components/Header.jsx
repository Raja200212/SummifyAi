import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function CustomNavbar() {
  const navigate = useNavigate(); 

  return (
    <Navbar expand="lg" className="bg-dark text-light" fixed="top">
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand className="d-flex align-items-center text-white font-bold text-2xl">
          <img
            src="images.png" // Replace with your image URL
            alt="Summify AI Logo"
            width="40"
            height="40"
            className="me-2"
          />
          Summify AI
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav className="mx-auto w-100 d-flex justify-content-center text-white font-bold text-2xl">
            <Nav.Link as={Link} to="/feature" className="text-light mx-3">
              Feature
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="text-light mx-3">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/use-cases" className="text-light mx-3">
              Use Cases
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-light mx-3">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="text-light mx-3">
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Authentication Buttons */}
          <Form className="d-flex justify-content-end gap-2 mt-3">
            <Button variant="light" className="rounded-lg btn" onClick={() => navigate("/login")}>
              Log-in
            </Button>
            <Button variant="light" className="rounded-lg btn">
              Sign-in
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
