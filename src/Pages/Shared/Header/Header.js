import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { Button, Stack } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">SAFE TOUR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/allBooking">Manage All Booking</Nav.Link>
                            <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                            {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
                            {user?.email?<Stack direction="horizontal">
                                <small className="text-info">{user.displayName?user.displayName : ' '}</small>
                            <Button variant="dark" onClick={logOut}>Logout</Button> 
                            </Stack>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;