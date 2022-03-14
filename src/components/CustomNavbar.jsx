import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.scss";

const CustomNavbar = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Link className="nav-link nav-brand" to="/">
          Probearbeit Frontend
        </Link>
      </Navbar>
      <div className="sidebar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/task">
          Task
        </Link>
      </div>
    </>
  );
};

export default CustomNavbar;
