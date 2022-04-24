import './style.css'
import { GrCart } from 'react-icons/gr'
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    // <div classname="div">
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/HomePage">
          <img className="Logo" src="./atelie-logo.png" alt="" width="170px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#"></Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/Register">
              Cadastre-se
            </Nav.Link>

            <Nav.Link href="cart">
              <div className="cartIcon">
                <GrCart />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //  </div>
  )
}
