import { Element } from "react-scroll";
import About from "../../sections/About/About";
import Footer from "../../sections/Footer/Footer";
import Landing from "../../sections/Landing/Landing";

import Work from "../../sections/Work/Work";

function MainPage() {
  return (
    <>
      <Landing />
      <Element name="about">
        <About />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Footer />
    </>
  );
}

export default MainPage;
