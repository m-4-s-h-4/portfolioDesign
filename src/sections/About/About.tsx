import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Container from "../../components/base components/Container/Container";
import Services from "../../components/about components/Services/Services";
import Stack from "../../components/base components/LayoutComponents/Stack/Stack";
import Grid from "../../components/base components/LayoutComponents/Grid/Grid"; // Import Grid

const textLines = [
  "Hey, I'm Masha,",
  "A freelance designer ",
  "Based in Barcelona!",
];

const SquareToRectImage = styled(motion.img)`
  width: 10rem;
  height: 30rem;
  border-radius: 10px;
  object-fit: cover;
`;

const About: React.FC = () => {
  return (
    <Container
      height="auto"
      paddingLeftRight="SpacingSpacing2"
      paddingTopBottom="SpacingSpacing10"
      direction="row"
    >
      <Grid variant="variant5" gridHeight="auto">
        <Stack gap="SpacingSpacing3">
          <Heading level="h3" color="dark" align="left">
            {textLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.8,
                }}
              >
                {line}
              </motion.div>
            ))}
          </Heading>

          {/* Square to Rectangle Image */}
          <SquareToRectImage
            src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=3638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            initial={{ width: "10rem", height: "18rem" }}
            animate={{
              width: "100%",
              height: "18rem",
              borderRadius: "40px",
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </Stack>

        <Stack gap="SpacingSpacing3">
          <Services
            imageSrc={
              "https://i.pinimg.com/originals/62/db/a2/62dba2ee08a822e6c5527a85bc7ad8b3.gif"
            }
            title={"Motion Graphics"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            }
          />
          <Services
            imageSrc={
              "https://i.pinimg.com/originals/44/3e/35/443e3595e5518592e3753ffa5699657b.gif"
            }
            title={"Ui Design"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            }
          />
          <Services
            imageSrc={
              "https://i.pinimg.com/originals/06/18/72/061872a01924df1ee69379cd93b42476.gif"
            }
            title={"Web development"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            }
          />
        </Stack>
      </Grid>
    </Container>
  );
};

export default About;
