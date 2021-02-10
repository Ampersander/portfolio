import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import ExperienceCard from "./ExperienceCard";

const Experience= ({ heading, parts,navlink }) => {

  return (
    <Jumbotron fluid id={navlink} className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
  
      {   parts.map((part, index) => (
        <ExperienceCard
          key={`${heading}-${index}`}
          id={index}
          value={part}
          navlink={navlink}       
        />
      ))

    }
       
      </Container>
    </Jumbotron>
  );
};

export default Experience;
