import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <NavLink className="navbar-brand text-success" to="/">
                        Wanderlust
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {
                                user.email &&
                                <>
                                    <Nav.Link as={Link} to="/addService">Add New Service</Nav.Link>
                                    <Nav.Link as={Link} to="/manageOrders">Manage Orders</Nav.Link>
                                    <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>
                            {
                                user.email
                                    ?
                                    <>
                                        <span className="navbar-text">
                                            {user?.displayName}
                                        </span>
                                        &nbsp;
                                        <button className="btn btn-outline-secondary" onClick={logOut}>Log Out</button>
                                    </>
                                    :
                                    <>
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;