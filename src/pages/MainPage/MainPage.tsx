import React from "react";
import { Element, Link } from "react-scroll";
import About from "../../sections/About/About";
import Footer from "../../sections/Footer/Footer";
import Landing from "../../sections/Landing/Landing";
import Work from "../../sections/Work/Work";
import Container from "../../components/base components/Container/Container";

function MainPage() {
  return (
    <>
      <Landing />
      <Container
        height="auto"
        paddingLeftRight="SpacingSpacing4"
        enableResponsivePadding={true}
      >
        <nav>
          <Link to="about" smooth={true} duration={3500}></Link>
          <Link to="work" smooth={true} duration={3500}></Link>
        </nav>
        <Element name="about">
          <About />
        </Element>
        <Element name="work">
          <Work />
        </Element>
      </Container>
      <Footer />
    </>
  );
}

export default MainPage;
