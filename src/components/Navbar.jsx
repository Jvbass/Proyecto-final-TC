import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="navbar fixed-top"
        >
          <Container fluid>
            <div>
              <Link to="/carrito">
              <i class="fa-solid fa-bag-shopping"></i>
              </Link>
              <Link to="/buscar">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
            <Link to="/">
              <img className="Header.img" src="/images/otras/logo.png"></img>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/bordados">Bordados</Link>
                  <Link to="/casapajaros">Casas Nido</Link>
                  <Link to="/lamparas">Lamparas</Link>
                  <Link to="/quienessomos">Quienes somos</Link>
                  <Link to="/contactanos">Contactanos</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
