import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ExperienceCard = ({ value,navlink }) => {
  const {
    name,
    description,
    date,
    pdf_url,
    pdf_url_name,
    //img_url,
    sec_url,
    sec_url_name,
    
  } = value;
  return (
    <Col md={0}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Header as="h5">{date || <Skeleton />}</Card.Header>
        <Card.Body>
          <Card.Title as="h6">{name || <Skeleton />} </Card.Title>
          <hr />  
          <Card.Text>{description} </Card.Text> 
          {sec_url ? <CardButtons pdf_url={pdf_url} sec_url={sec_url} pdf_url_name={pdf_url_name} sec_url_name={sec_url_name} navlink={navlink} /> : <Skeleton count={0} />}
           
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ sec_url, pdf_url, pdf_url_name, sec_url_name, navlink }) => {
  return (
    <div className="text-center">
     
         
        {(() => {
        if (navlink === "experience" && sec_url !== '') {
          return (
            <a
            href={`${sec_url}`} target="_blank"
            className="btn btn-outline-secondary m-2 btnSecondary" rel="noopener noreferrer"
          >
            <i navlink className="fa p-2">&#xf275;</i>
            {`${sec_url_name}`}
            </a>
          )
        } else if (navlink === "formation" && sec_url !== '') {
          return (
            <a
            href={`${sec_url}`} target="_blank"
            className="btn btn-outline-secondary m-2 btnSecondary" rel="noopener noreferrer"
          >
            <i navlink className="fa p-2">&#xf19d;</i>
            {`${sec_url_name}`}
            </a> 
          )
        } 
      })()}
 {(() => {
        if (pdf_url !== '') {
          return (
            <a href={`${pdf_url}`} target=" _blank" className="btn btn-outline-secondary m-2 btnSecondary">
            <i className="fa p-2">&#xf1c1;</i>
            {`${pdf_url_name}`}
          </a>
          )
        } 
         
      })()}
    </div>
  );
};

export default ExperienceCard;
