import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import cocLogo from '../../assets/img/coc-logo.jpg';

const navStyle = {
    display: 'flex',
    justifyContent: 'center'
};


export default function Navigation() {


    return (
        <Navbar style={{ backgroundColor: '#0D000F' }} variant="dark">
            <Navbar.Brand href="#home">
                <img
                    style={{ marginLeft: '10px', marginRight: '10px' }}
                    alt=""
                    src={cocLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                COC
            </Navbar.Brand>
            <Nav className="mr-auto " style={navStyle}>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/sample">Sample</Nav.Link>
                <Nav.Link as={Link} to="/search">Search</Nav.Link>
            </Nav>


        </Navbar>
    )
}