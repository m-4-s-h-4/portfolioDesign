import React from "react";
import Container from "../../components/base components/Container/Container";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import ImagesLayout from "../../components/media components/ImagesLayout/ImagesLayout";
import TextWithMedia from "../../components/text with media components/TextWithMedia/TextWithMedia";
import TextLayout from "../../components/text layout components/TextLayout/TextLayout";

const WorkPage: React.FC = () => {
  return (
    <>
      <Container
        backgroundColor="dark"
        height="auto"
        direction="column"
        paddingLeftRight="SpacingSpacing2"
      >
        <Heading level="display" color="light">
          LOGO ANIMATION
        </Heading>
        <ImagesLayout variant="variant2">
          <img
            src="https://dvtk.us/media/pages/projects/swiss-design-awards-2021/aa6a065d1a-1652190519/sda-key-visual_02.png"
            alt="Image 1"
          />
          <img
            src="https://2021.swissdesignawardsblog.ch/media/pages/participants/livia-rita/75bc9651a2-1623971103/home_livia-rita_7.jpg?width=600&quality=30"
            alt="Image 2"
          />
          <img
            src="https://2021.swissdesignawardsblog.ch/media/pages/participants/livia-rita/bb59aa0ce0-1623971102/home_livia-rita_5.jpg?width=600&quality=30"
            alt="Image 3"
          />
        </ImagesLayout>
      </Container>
      <Container
        backgroundColor="light"
        height="auto"
        direction="column"
        paddingLeftRight="SpacingSpacing2"
      >
        <TextWithMedia
          variant="ImageSmall"
          headingText="About the Project"
          paragraphText="This case study explores our recent logo animation project for a leading design firm. Our goal was to create an engaging and memorable animation that captured the essence of the brand while enhancing its visual appeal across multiple platforms."
          imageUrl="https://2021.swissdesignawardsblog.ch/media/pages/participants/livia-rita/bb59aa0ce0-1623971102/home_livia-rita_5.jpg?width=600&quality=30"
        />
        <ImagesLayout variant="fullWidth" imageHeight="35vh">
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 1"
          />
        </ImagesLayout>
        <TextLayout
          variant="HeadingLParagraphR"
          headingText="The Challenge"
          paragraphText="The client wanted a fresh, dynamic logo animation that would stand out in a crowded marketplace. The animation needed to be versatile enough for use in various digital contexts—from website intros to social media promotions—while maintaining brand consistency."
        />
        <ImagesLayout variant="variant2">
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 1"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 2"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 3"
          />
        </ImagesLayout>

        <TextLayout
          variant="HeadingWithThreeParagraph"
          headings={[
            "Our Approach to the project",
            "The Design Process",
            "Final Implementation",
          ]}
          paragraphs={[
            "Our approach focused on understanding the client's brand identity and their specific needs. We began by analyzing their market, competitors, and existing branding elements to create a strategy that aligned with their vision.",
            "The design process involved several iterations, beginning with wireframes and storyboards. We collaborated closely with the client to ensure each stage of development met their expectations. Our team experimented with various animation styles and techniques to capture the desired energy and motion.",
            "After finalizing the design, we implemented the animation across various platforms, ensuring compatibility and responsiveness. The animation was optimized for web performance, and the final product was tested extensively for quality assurance.",
          ]}
        />
        <ImagesLayout variant="variant3">
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 1"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 2"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 3"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 1"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 2"
          />
        </ImagesLayout>
        <TextWithMedia
          variant="ImageSmall"
          headingText="The Impact"
          paragraphText="This project demonstrates our ability to deliver creative, impactful animations that align with the client's branding and business objectives. The successful execution of this logo animation showcases our team's expertise in design, storytelling, and technical implementation, resulting in a valuable brand asset that enhances visibility and engagement."
          imageUrl="https://assets.awwwards.com/awards/sites_of_the_day/2016/02/awwwards-sotd-Red-Collar-1.jpg"
        />
        <TextLayout
          variant="HeadingLParagraphR"
          headingText="final outcome"
          paragraphText="The client wanted a fresh, dynamic logo animation that would stand out in a crowded marketplace. The animation needed to be versatile enough for use in various digital contexts—from website intros to social media promotions—while maintaining brand consistency."
        />
        <ImagesLayout variant="variant1">
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 1"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 2"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 3"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 1"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 2"
          />
          <img
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/noomo-1.jpg"
            alt="Image 2"
          />
        </ImagesLayout>
      </Container>
    </>
  );
};

export default WorkPage;
