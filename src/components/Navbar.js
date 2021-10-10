import React from 'react'
import { Container, Nav} from 'react-bootstrap'
import logo from "../media/logo.png"

export default function Navbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    NOKHEADS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">My Nok</Nav.Link>
                        <Nav.Link href="#pricing">Gallery</Nav.Link>
                        <Nav.Link href="#pricing">Game</Nav.Link>
                        <Nav.Link href="#pricing">Connect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
