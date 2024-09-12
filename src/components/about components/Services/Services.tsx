import React from "react";
import styled from "styled-components";
import Flex from "../../base components/LayoutComponents/Flex/Flex";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import Paragraph from "../../base components/TypographyComponents/Paragraph/Paragraph";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import { TextColorDark } from "../../../tokens/js/variables";

const CircleImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

interface ServiceProps {
  imageSrc: string;
  title: string;
  text: string;
}

const ServiceWrapper = styled.div`
  border-top: 0.5px solid ${TextColorDark};
  padding-top: 1rem;
  width: 100%;
`;

const Service: React.FC<ServiceProps> = ({ imageSrc, title, text }) => {
  return (
    <ServiceWrapper>
      <Flex xAlign="flex-start" yAlign="flex-start" gap="SpacingSpacing1">
        <CircleImageWrapper>
          <CircleImage src={imageSrc} alt={title} />
        </CircleImageWrapper>
        <Stack>
          <Heading color="dark" level={"h4"}>
            {title}
          </Heading>
          <Paragraph textTransform="none">{text}</Paragraph>
        </Stack>
      </Flex>
    </ServiceWrapper>
  );
};

export default Service;
