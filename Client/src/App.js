import { Container } from "react-bootstrap";

import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Container className="overflow-hidden" style={{height: 'calc(100vh - 9em)'}}>
        <Home message="Hello from app" />
      </Container>

      <Footer />
    </>
  );
}

export default App;
