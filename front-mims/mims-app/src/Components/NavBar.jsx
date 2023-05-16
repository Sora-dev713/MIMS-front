/*
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MIMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#inventario">Inventarios</Nav.Link>
            <Nav.Link href="#locacion">Locaciones</Nav.Link>
            <Nav.Link href="#tipos_de_joya">Tipos de Joya</Nav.Link>
            <Nav.Link href="#joya">Joyas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
*/

import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../images/logo-letras.png';
import image_user from '../images/user.png';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar__center">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/inventario" className={`navbar__link ${pathname === '/inventario' ? 'active' : ''}`}>
              Inventario
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/locaciones" className={`navbar__link ${pathname === '/locaciones' ? 'active' : ''}`}>
              Locaciones
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/tipos-de-joya" className={`navbar__link ${pathname === '/tipos-de-joya' ? 'active' : ''}`}>
              Tipos de joya
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/joyas" className={`navbar__link ${pathname === '/joyas' ? 'active' : ''}`}>
              Joyas
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <span className="navbar__username">User</span>
        <img src={image_user} alt='User' className="navbar__profile-picture" />
      </div>
    </nav>
  );
}

export default Navbar;