import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "./../../Assets/img/covid-19-logo.png";

function Header(props) {
  const navigatePage = props.navigatePage;
  const currentPage = props.currentPage;
  return (
    <Navbar bg="light" variant="light" className="mb-4">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={() => {
            navigatePage("home");
          }}
        >
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          COVID-19
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            active={currentPage === "home" || currentPage === "details"}
            href="#"
            onClick={() => {
              navigatePage("home");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#"
            active={currentPage === "favorite"}
            onClick={() => {
              navigatePage("favorite");
            }}
          >
            Favorite
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
