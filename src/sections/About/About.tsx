import React from "react";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Container from "../../components/base components/Container/Container";
import Button from "../../components/base components/Button/Button";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import Box from "../../components/base components/Primatives/Box/Box";

const About: React.FC = () => {
  return (
    <Container height="auto">
      <Box paddingBottom="SpacingSpacing10" paddingTop="SpacingSpacing10">
        <Flex
          direction="column"
          xAlign="center"
          yAlign="center"
          gap="SpacingSpacing2"
        >
          {" "}
          <Heading
            level="h3"
            color="dark"
            align="center"
            paddingLeft="SpacingSpacing20"
            paddingRight="SpacingSpacing20"
          >
            Hey, I'm Maria, a freelance designer based in Barcelona! I
            specialize in motion graphics and UI design. I will help you to
            transform your static content into dynamic, engaging visuals that
            elevate your digital presence.
          </Heading>
          <Button text="tell me your story" />
        </Flex>
      </Box>
    </Container>
  );
};

export default About;
