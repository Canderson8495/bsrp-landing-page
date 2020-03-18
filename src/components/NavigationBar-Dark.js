import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export const NavigationBar = () => (

<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Blue Sky</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Button variant="secondary ml-auto" href="https://www.forums.192.168.1.90:3000">Forums</Button>
  </Navbar.Collapse>
</Navbar>
        
)

