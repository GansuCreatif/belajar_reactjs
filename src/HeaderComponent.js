import React, { Component } from "react";
/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';*/
import {NavStyle, UlStyle, AStyle} from "./StyledHeader";

    class Header extends Component {
        render() {
        return (
          /*<Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Gamelab Indonesia</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Product" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>*/
          <NavStyle>
           <h3>Logo</h3>
          <UlStyle>
            <li><AStyle>Home</AStyle></li>
            <li><AStyle>About</AStyle></li>
            <li><AStyle>Work</AStyle></li>
            <li><AStyle>Careers</AStyle></li>
            <li><AStyle>Contact Us</AStyle></li>
          </UlStyle>
        </NavStyle>
        );
      }
  }
export default Header;