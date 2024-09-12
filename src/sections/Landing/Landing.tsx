import React, { useState, useEffect } from "react";
import Container from "../../components/base components/Container/Container";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import AnimLanding from "../../components/landing components/AnimLanding/AnimLanding";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";

const Landing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  // Order in which the letters should change
  const changeOrder = [3, 1, 0, 4, 2];

  useEffect(() => {
    const startDelay = 2200;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < changeOrder.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, 300);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, []);

  const renderTextWithChange = () => {
    const originalText = "masha";
    const targetText = "space";

    return (
      <span style={textContainerStyle}>
        {originalText.split("").map((char, index) => {
          // Find the correct letter position using changeOrder
          const orderIndex = changeOrder.indexOf(index);
          return (
            <span
              key={index}
              style={{
                transition: "color 0.2s ease-out",
                color: currentIndex >= orderIndex ? "inherit" : "inherit",
              }}
            >
              {currentIndex >= orderIndex ? targetText[index] : char}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <Container height="100vh">
      <Flex xAlign="center" yAlign="center" direction="column">
        <AnimLanding />
        <Heading level={"display"} color="light" style={headingStyle}>
          {renderTextWithChange()}
        </Heading>
      </Flex>
    </Container>
  );
};

const headingStyle: React.CSSProperties = {
  position: "absolute",
  fontWeight: "900",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  mixBlendMode: "difference",
  zIndex: 20,
  whiteSpace: "nowrap",
};

const textContainerStyle: React.CSSProperties = {
  display: "inline-flex",
};

export default Landing;
