import React from "react";
import { motion } from "framer-motion";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Container from "../../components/base components/Container/Container";

import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import Box from "../../components/base components/Primatives/Box/Box";

const textLines = [
  "Hey, I'm Masha, a freelance designer based in Barcelona!",
  "I specialize in motion graphics and UI design.",
  "I will help you to transform your static content into dynamic,",
  "engaging visuals that elevate your digital presence.",
];

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
          <Heading
            level="h4"
            color="dark"
            align="center"
            paddingLeft="SpacingSpacing20"
            paddingRight="SpacingSpacing20"
          >
            {textLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1, // Increased duration to make animation slower
                  delay: index * 0.8, // Increased delay between lines
                }}
              >
                {line}
              </motion.div>
            ))}
          </Heading>
        </Flex>
      </Box>
    </Container>
  );
};

export default About;
