import "./App.css";
import React, { useRef, useEffect } from "react";

import Nav from "./components/Nav";
import Menu from "./components/Menu";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";

const App = () => {

  const homeRef = useRef();
  const servicesRef = useRef();
  const productsRef = useRef();
  const aboutRef = useRef();

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleServicesClick = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProductsClick = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Nav
        handleHomeClick={handleHomeClick}
        handleServicesClick={handleServicesClick}
        handleProductsClick={handleProductsClick}
        handleAboutClick={handleAboutClick}
      />
      <Menu
        handleHomeClick={handleHomeClick}
        handleServicesClick={handleServicesClick}
        handleProductsClick={handleProductsClick}
        handleAboutClick={handleAboutClick}
        homeRef={homeRef}
      />
      <LandingPage
        homeRef={homeRef}
        productsRef={productsRef}
        aboutRef={aboutRef}
      />

      <Services
        servicesRef={servicesRef}
      />
    </div>
  );
}

export default App;
