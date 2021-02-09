import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ExperienceCard = ({ value }) => {
  return (
    <Col md={0}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Header as="h5">{value.date || <Skeleton />}</Card.Header>
        <Card.Body>
          <Card.Title as="h6">{value.name || <Skeleton />} </Card.Title>
          <hr />  
          <Card.Text>{value.description || <Skeleton count={3} />} </Card.Text> 
        </Card.Body>
      </Card>
    </Col>
  );
};



export default ExperienceCard;
