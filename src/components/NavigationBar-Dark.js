import React from 'react';
import {Navbar, Button} from 'react-bootstrap';


export const NavigationBar = () => (

<Navbar className="transparent-nav" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Blue Sky</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Button variant="primary ml-auto" href="https://www.forums.192.168.1.90:3000" disabled>Forums</Button>
  </Navbar.Collapse>
</Navbar>
        
)


