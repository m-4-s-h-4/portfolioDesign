import React from "react";
import styled from "styled-components";
import Box from "../Primatives/Box/Box";
import {
  BackgroundColorDark,
  BackgroundColorLight,
} from "../../../tokens/js/variables";
import { spacingMap } from "../../../utils/spacingMap";

export interface ContainerProps {
  backgroundColor?: "dark" | "light";
  height?: "auto" | "100vh" | "50vh" | "25vh";
  paddingTopBottom?: keyof typeof spacingMap;
  direction?: "row" | "column";
  children: React.ReactNode;
}

const StyledContainer = styled(Box)<{
  bgColor: string;
  containerHeight: string;
  paddingTopBottom: string;
  flexDirection: string;
}>`
  height: ${(props) => props.containerHeight};
  width: 100%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: stretch;
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
`;

const Container: React.FC<ContainerProps> = ({
  backgroundColor = "light",
  height = "auto",
  paddingTopBottom = "SpacingSpacing0",
  direction = "column",
  children,
}) => {
  const bgColor =
    backgroundColor === "dark" ? BackgroundColorDark : BackgroundColorLight;
  const paddingValue = spacingMap[paddingTopBottom];

  return (
    <StyledContainer
      bgColor={bgColor}
      containerHeight={height}
      paddingTopBottom={paddingValue}
      flexDirection={direction}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
