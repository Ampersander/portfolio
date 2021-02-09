import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        <Col md={0}>
          {props.children}
          <i className="fas fa-at" /> : <a href="mailto:romain-b49460@hotmail.com">romain-b49460@hotmail.com</a>
        </Col>
        <Col md={0}>
          <i className="fas fa-phone" /> : <a href="tel:+33651841607">0651841607</a>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
