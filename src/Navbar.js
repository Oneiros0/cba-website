import React from 'react';
import {withRouter} from 'react-router-dom';
import {Dropdown, Navbar, Nav, NavDropdown} from 'react-bootstrap';

function NavBar(props) {
  return (
    <div>
    <Navbar expand="lg" id="title-container">
        <Navbar.Brand className="nv-brand" href="/">Chattanooga Beverage Alliance</Navbar.Brand>
    </Navbar>
    <Navbar expand="lg">
        <NavDropdown.Divider />
        <Navbar.Toggle aria-controls="basic-navbar-nav navbar-right"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto  nav-content-left">
                <Nav.Link href="/">About Us</Nav.Link>
                <Nav.Link href="/supporters">Supporters</Nav.Link>
                <Nav.Link href="/board">The Board</Nav.Link>
                <Nav.Link href="/happyhours">Happy Hours</Nav.Link>
                <Nav.Link href="/join">Join</Nav.Link>
            </Nav>
            {/* <Nav className="mr-auto nav-content" id="nav-content-right">
              <Nav.Link href="/happyhours">Happy Hours</Nav.Link>
              <Nav.Link href="/join">Join</Nav.Link>
            </Nav> */}
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default withRouter(NavBar);