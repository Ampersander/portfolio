import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, experience, diplome } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
           
          <Nav.Link
            className="nav-link lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Mon CV
          </Nav.Link>

          {diplome.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#diplome"}
            >
              Formations
            </Nav.Link>
          )}

          {experience.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#experience"}
            >
              Expériences
            </Nav.Link>
          )}
          
          {skills.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Compétences
            </Nav.Link>
          )}
          {repos.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projets
            </Nav.Link>
          )}

          {about.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              À propos de moi
            </Nav.Link>
          )}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
