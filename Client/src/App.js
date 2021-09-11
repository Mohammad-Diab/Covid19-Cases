import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/home";
import Details from "./pages/details";
import Favorite from "./pages/favorite";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";

import { Container } from "react-bootstrap";

function App() {
  const [currentPage, setCurrentPage] = useState({
    page: "home",
    param: undefined,
  });

  function navigate(page, param) {
    setCurrentPage({ page: page, param: param });
  }

  return (
    <>
      <NavBar
        currentPage={currentPage.page}
        navigatePage={(pageId) => navigate(pageId)}
      />
      <Container
        className="overflow-hidden"
        style={{ height: "calc(100vh - 9em)" }}
      >
        {currentPage.page === "home" ? (
          <Home
            navigatePage={(pageId, countryId) => navigate(pageId, countryId)}
          />
        ) : currentPage.page === "favorite" ? (
          <Favorite />
        ) : (
          <Details countryId={currentPage.param} />
        )}
      </Container>

      <Footer />
    </>
  );
}

export default App;
