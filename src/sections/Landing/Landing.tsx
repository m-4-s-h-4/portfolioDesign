import React from "react";
import Container from "../../components/base components/Container/Container";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import AnimLanding from "../../components/landing components/AnimLanding/AnimLanding";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";

const Landing: React.FC = () => {
  return (
    <Container height="100vh">
      <Flex xAlign="center" yAlign="center" direction="column">
        <AnimLanding />
        <Heading level={"display"} color="light" style={headingStyle}>
          masha
        </Heading>
      </Flex>
    </Container>
  );
};

const headingStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  mixBlendMode: "difference",
  zIndex: 20, // Ensures the heading is above other elements
};

export default Landing;
