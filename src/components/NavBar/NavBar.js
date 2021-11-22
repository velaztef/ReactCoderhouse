import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget' 
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function NavBar () {
    return (
    
        <Navbar bg="light" variant="light" className='nav'>
          <Container>
          <Navbar.Brand><Link to={'/'} className='navlink'>Tienda Nova</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'} className='navlink'>Home</Link></Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" className='navlink'>
                <NavDropdown.Item><Link to={'/categorias/remeras'} className="navlink">Remeras</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={'/categorias/pantalones'} className="navlink">Pantalones</Link></NavDropdown.Item>
                </NavDropdown>
            <Nav.Link><Link to={'/contacto'} className='navlink'>Contacto</Link></Nav.Link>
            <Nav.Link><Link to={'/cart'} className='navlink'><CartWidget/></Link></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    )
}

export default NavBar 