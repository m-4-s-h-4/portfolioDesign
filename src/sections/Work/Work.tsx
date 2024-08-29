import React from "react";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Category from "../../components/work components/Category/Category";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";
import Container from "../../components/base components/Container/Container";
import ImagesLayout from "../../components/media components/ImagesLayout/ImagesLayout";

const Work: React.FC = () => {
  return (
    <>
      <Container paddingLeftRight="SpacingSpacing2">
        <Flex
          direction="row"
          xAlign="space-between"
          yAlign="center"
          gap="SpacingSpacing2"
        >
          <Heading level="h4" color="dark" align="center">
            work
          </Heading>
          <Category />
        </Flex>
      </Container>
      <Container
        paddingLeftRight="SpacingSpacing1"
        paddingTopBottom="SpacingSpacing1"
      >
        <ImagesLayout variant="variant1">
          <img
            src="https://cdn.prod.website-files.com/616d317372b9aa82983a918f/61f29b802ac9c2f4d3c0d440_Frame_5.webp"
            alt="Image 1"
          />
          <img
            src="https://cdn.prod.website-files.com/616d317372b9aa82983a918f/61f29b802ac9c2f4d3c0d440_Frame_5.webp"
            alt="Image 2"
          />
          <img
            src="https://cdn.prod.website-files.com/616d317372b9aa82983a918f/61f29b802ac9c2f4d3c0d440_Frame_5.webp"
            alt="Image 3"
          />
          <img
            src="https://cdn.prod.website-files.com/616d317372b9aa82983a918f/61f29b802ac9c2f4d3c0d440_Frame_5.webp"
            alt="Image 1"
          />
          <img
            src="https://cdn.prod.website-files.com/616d317372b9aa82983a918f/61f29b802ac9c2f4d3c0d440_Frame_5.webp"
            alt="Image 2"
          />
          <img
            src="https://cdn.prod.website-files.com/616d317372b9aa82983a918f/61f29b802ac9c2f4d3c0d440_Frame_5.webp"
            alt="Image 3"
          />
        </ImagesLayout>
      </Container>
    </>
  );
};

export default Work;
