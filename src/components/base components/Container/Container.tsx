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
  paddingLeftRight?: keyof typeof spacingMap;
  direction?: "row" | "column";
  enableResponsivePadding?: boolean; // New prop to enable/disable responsive padding
  children: React.ReactNode;
}

const StyledContainer = styled(Box)<{
  bgColor: string;
  containerHeight: string;
  paddingTopBottom: string;
  paddingLeftRight: string;
  flexDirection: string;
  enableResponsivePadding: boolean; // Pass prop to control media queries
}>`
  height: ${(props) => props.containerHeight};
  width: 100%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: stretch;
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
  padding-left: ${(props) => props.paddingLeftRight};
  padding-right: ${(props) => props.paddingLeftRight};

  ${(props) =>
    props.enableResponsivePadding &&
    `
    @media (max-width: 1145px) {
      padding-left: ${spacingMap["SpacingSpacing2"]};
      padding-right: ${spacingMap["SpacingSpacing2"]};
    }

    @media (max-width: 768px) {
      padding-left: ${spacingMap["SpacingSpacing1"]};
      padding-right: ${spacingMap["SpacingSpacing1"]};
    }
  `}
`;

const Container: React.FC<ContainerProps> = ({
  backgroundColor = "light",
  height = "auto",
  paddingTopBottom = "SpacingSpacing0",
  paddingLeftRight = "SpacingSpacing0",
  direction = "column",
  enableResponsivePadding = false, // Default to false (no responsive padding)
  children,
}) => {
  const bgColor =
    backgroundColor === "dark" ? BackgroundColorDark : BackgroundColorLight;
  const paddingTopBottomValue = spacingMap[paddingTopBottom];
  const paddingLeftRightValue = spacingMap[paddingLeftRight];

  return (
    <StyledContainer
      bgColor={bgColor}
      containerHeight={height}
      paddingTopBottom={paddingTopBottomValue}
      paddingLeftRight={paddingLeftRightValue}
      flexDirection={direction}
      enableResponsivePadding={enableResponsivePadding} // Pass prop to enable/disable responsive padding
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
