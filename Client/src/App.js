
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/home";
import Details from "./pages/details";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar />
      <Container className="overflow-hidden" style={{height: 'calc(100vh - 9em)'}}>
        <Details countryId="ec4f93f1-11fc-11ec-a969-d0c5d32e1e3a" />
      </Container>

      <Footer />
    </>
  );
}

export default App;
