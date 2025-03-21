import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "./ResForm.css"; // Custom styles

const ResForm = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="auth-box p-4 rounded border border-secondary">
        {/* Header */}
        <h2 className="text-white text-center mb-2">Welcome to Summify</h2>
        <p className="text-muted text-center">Enter your email below to continue to your account.</p>

        {/* Form */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" className="input-field" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" className="input-field" />
          </Form.Group>

          <Button variant="light" className="w-100 mb-3 fw-bold">
            Create Account
          </Button>
        </Form>

        {/* Login Link */}
        <p className="text-center text-light">
          Already have an account? <Link to="/login" className="text-white fw-bold">Log in</Link>
        </p>

        {/* Divider */}
        <hr className="text-secondary" />
        <p className="text-center text-secondary">OR CONTINUE WITH</p>

        {/* Social Buttons */}
        <Button variant="dark" className="w-100 mb-2 border border-secondary d-flex align-items-center justify-content-center">
          <FaGoogle className="me-2" /> Google
        </Button>
        <Button variant="dark" className="w-100 border border-secondary d-flex align-items-center justify-content-center">
          <FaGithub className="me-2" /> Github
        </Button>
      </div>
    </Container>
  );
};

export default ResForm;
