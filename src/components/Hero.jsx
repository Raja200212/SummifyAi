import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaVideo, FaBlog, FaGraduationCap, FaChartBar, FaNewspaper, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Header Component
const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="py-4 text-center text-light" style={{ background: "#02050a" }}>
      <h1>Welcome to Summify.Ai</h1>
      <p>Transform your text content into engaging blog posts effortlessly.</p>
      <Button 
        variant="primary" 
        size="lg" 
        className="mt-3" 
        onClick={() => navigate("/Login")} // Change "/dashboard" to your desired path
      >
        Get Started
      </Button>
    </header>
  );
};

// Categories Data
const categories = [
  { title: "Content Creators", text: "Content creators, including YouTubers, podcasters, and videographers, can benefit from Summify.io by repurposing their video content into written blog posts.", icon: <FaVideo /> },
  { title: "Bloggers", text: "Bloggers can use Summify.io to transform videos into blog posts quickly. It's a time-saving solution that helps maintain a consistent posting schedule.", icon: <FaBlog /> },
  { title: "Students", text: "Students can use Summify.io to convert educational videos or audio lectures into easily digestible written content.", icon: <FaGraduationCap /> },
  { title: "Digital Marketers", text: "Digital marketers can utilize Summify.io to create SEO-friendly blog posts that align with their content marketing strategies.", icon: <FaChartBar /> },
  { title: "Anyone Looking to Learn Better", text: "Anyone who wants to learn better can use Summify.io to convert video content into written content that is easier to digest and understand.", icon: <FaUserGraduate /> },
  { title: "Journalists and Writers", text: "Journalists and writers can use Summify.io to summarize interviews, press conferences, or other video content for use in articles or blog posts.", icon: <FaNewspaper /> },
];

// Main App Component
const App = () => {
  return (
    <div className="text-light min-vh-50" style={{ background: "#030617" }}>
      <Header />
      <Container className="py-5">
        <Row className="g-4">
          {categories.map((category, index) => (
            <Col md={4} key={index}>
              <Card className="text-light border-light p-3 h-100 shadow-lg" style={{ background: "#0E1526" }}>
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <span className="me-2 fs-4">{category.icon}</span>
                    <strong>{category.title}</strong>
                  </Card.Title>
                  <Card.Text>{category.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
