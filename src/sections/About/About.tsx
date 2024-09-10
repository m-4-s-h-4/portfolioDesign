import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Container from "../../components/base components/Container/Container";
import Services from "../../components/about components/Services/Services";
import Stack from "../../components/base components/LayoutComponents/Stack/Stack";
import Grid from "../../components/base components/LayoutComponents/Grid/Grid";

const textLines = [
  "Hi, I'm Masha,",
  "A creative designer",
  "Based in Barcelona.",
];

const SquareToRectImage = styled(motion.img)`
  width: 10rem;
  height: 30rem;
  border-radius: 10px;
  object-fit: cover;
`;

const About: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container
      height="auto"
      paddingLeftRight="SpacingSpacing6"
      paddingTopBottom="SpacingSpacing10"
      direction="row"
    >
      <Grid variant="variant5" gridHeight="auto" gap="SpacingSpacing6">
        <Stack gap="SpacingSpacing3" ref={ref}>
          <Heading level="h2" color="dark" align="left">
            {textLines.map((line, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: index * 0.5,
                    },
                  },
                }}
              >
                {line}
              </motion.div>
            ))}
          </Heading>

          <SquareToRectImage
            src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=3638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { width: "10rem", height: "20rem" },
              visible: {
                width: "100%",
                height: "20rem",
                borderRadius: "40px",
                transition: {
                  duration: 1.5, // Increased duration for smoother animation
                  ease: [0.42, 0, 0.58, 1], // Smoother cubic-bezier curve
                  delay: 0.8, // Slightly earlier start to maintain flow
                },
              },
            }}
          />
        </Stack>

        <Stack gap="SpacingSpacing3" ref={ref}>
          {[
            "Motion Graphics",
            "Digital Design & Branding",
            "Web Development",
          ].map((serviceTitle, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                    delay: 1.8 + index * 0.3, // Services start sooner, shorter delay between them
                  },
                },
              }}
            >
              <Services
                imageSrc={
                  index === 0
                    ? "https://i.pinimg.com/originals/62/db/a2/62dba2ee08a822e6c5527a85bc7ad8b3.gif"
                    : index === 1
                      ? "https://i.pinimg.com/originals/44/3e/35/443e3595e5518592e3753ffa5699657b.gif"
                      : "https://i.pinimg.com/originals/06/18/72/061872a01924df1ee69379cd93b42476.gif"
                }
                title={serviceTitle}
                text={
                  index === 0
                    ? "Create eye-catching animations that bring your ideas to life. Perfect for videos, social media, and more."
                    : index === 1
                      ? "Design engaging user interfaces and eye-catching social media posts that captivate your audience and enhance your brand's presence."
                      : "Build powerful websites that make your brand stand out and perfectly match your unique identity."
                }
              />
            </motion.div>
          ))}
        </Stack>
      </Grid>
    </Container>
  );
};

export default About;
