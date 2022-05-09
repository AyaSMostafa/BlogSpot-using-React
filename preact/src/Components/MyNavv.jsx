
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {  Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export function MyNavv() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">BlogSpot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="/Blogs" to="/Blogs">
                            <Link to="/Blogs">Blogs</Link>
                            </Nav.Link>
                            <Nav.Link href="#details">
                            <Link to="/details">More Details</Link></Nav.Link>
                            <NavDropdown title="Blog Category" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Health</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Running</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Superfood </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Health Insurance</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                           
                            <Nav.Link className="loginlink" href="#TypesForms">
                                <Link to="/Form">Register</Link>
                            </Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};