import React from 'react';
import '../App.css';
import '../css/header.css';
import logo from '../images/logo.png';
import { motion } from "framer-motion"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div className='header'>
            <div className='row'>
                
                <Navbar bg="light" fixed='top' expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">
                        <div className='logo'>
                            <motion.img initial={{ y: -100}} animate={{ y: 0}} transition={{ type: "spring", delay: 0.1, stiffness: 100 }} src={logo} alt='' width={35}/>
                        </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                            Link
                            </Nav.Link>
                        </Nav>
                        
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;