import React from "react";

import { Navbar, Nav } from "rsuite";

const Navigation = () => {
  return (
    <Navbar style={{
      padding: '0 5vw',
      backgroundColor: 'white',
      position: 'fixed',
      width: '100vw',
      height: '8vh',
      display: 'flex',
      alignItems: 'center',
      opacity: '95%',
      fontSize: 'large'
    }}>
      <Navbar.Brand href="/">OFFICE LOGO</Navbar.Brand>
      <Nav>
        <Nav.Item>Home</Nav.Item>
        <Nav.Item>Services</Nav.Item>
        <Nav.Item>Products</Nav.Item>
        <Nav.Menu title="About">
          <Nav.Item>Company</Nav.Item>
          <Nav.Item>Team</Nav.Item>
          <Nav.Menu title="Contact">
            <Nav.Item>Via email</Nav.Item>
            <Nav.Item>Via telephone</Nav.Item>
          </Nav.Menu>
        </Nav.Menu>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
