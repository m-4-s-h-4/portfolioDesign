import React from "react";
import styled from "styled-components";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import Paragraph from "../../base components/TypographyComponents/Paragraph/Paragraph";
import Heading from "../../base components/TypographyComponents/Heading/Heading";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import { spacingMap } from "../../../utils/spacingMap";

interface TextLayoutProps {
  variant:
    | "HeadingLParagraphR"
    | "ThreeParagraph"
    | "HeadingWithThreeParagraph";
  headingText?: string;
  paragraphText?: string;
  paragraphs?: string[];
  headings?: string[];
  paddingTopBottom?: keyof typeof spacingMap;
}

const PaddedContainer = styled.div<{
  paddingTopBottom: string;
}>`
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
`;

const renderers = {
  HeadingLParagraphR: ({
    headingText,
    paragraphText,
  }: Pick<TextLayoutProps, "headingText" | "paragraphText">) => (
    <Grid variant="variant4">
      <Heading level="h3" color="dark">
        {headingText}
      </Heading>
      <Paragraph align="left" color="dark">
        {paragraphText}
      </Paragraph>
    </Grid>
  ),

  ThreeParagraph: ({ paragraphs }: Pick<TextLayoutProps, "paragraphs">) => (
    <Grid variant="variant2">
      {paragraphs?.map((text, index) => (
        <Paragraph key={index} align="left" color="dark">
          {text}
        </Paragraph>
      ))}
    </Grid>
  ),

  HeadingWithThreeParagraph: ({
    headings,
    paragraphs,
  }: Pick<TextLayoutProps, "headings" | "paragraphs">) => (
    <Grid variant="variant2">
      {paragraphs?.map((text, index) => (
        <Stack key={index} direction="vertical" gap="SpacingSpacing2">
          <Heading level="h4" color="dark">
            {headings?.[index] || `Heading ${index + 1}`}
          </Heading>
          <Paragraph align="left" color="dark">
            {text}
          </Paragraph>
        </Stack>
      ))}
    </Grid>
  ),
};

const TextLayout: React.FC<TextLayoutProps> = (props) => {
  const {
    variant,
    paddingTopBottom = "SpacingSpacing4", // Default padding for top and bottom
  } = props;

  const paddingTopBottomValue = spacingMap[paddingTopBottom];
  const Renderer = renderers[variant];

  return Renderer ? (
    <PaddedContainer paddingTopBottom={paddingTopBottomValue}>
      {Renderer(props)}
    </PaddedContainer>
  ) : null;
};

export default TextLayout;
