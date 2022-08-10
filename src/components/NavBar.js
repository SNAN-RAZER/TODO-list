import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";

const NavBar = (props) => {
    return (
        <Navbar bg="light" expand='lg'>
            <Container>
                <Navbar.Brand href="#home">ToDO App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">

                        <Nav.Item>
                        
                            <Nav.Link 
                            onClick={()=>props.setShowAddForm(true)}
                            >Add</Nav.Link>
                            
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}
export default NavBar;