import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";
import { spacingMap } from "../../../../utils/spacingMap";

export interface GridProps {
  variant?:
    | "variant1"
    | "variant2"
    | "variant3"
    | "variant4"
    | "variant5"
    | "variant6"
    | "variant7";
  style?: React.CSSProperties;
  children: React.ReactNode;
  gridHeight?: string;
  gap?: keyof typeof spacingMap;
}

const variant1GridAreas = [
  "1 / 1 / 3 / 2",
  "1 / 2 / 2 / 3",
  "1 / 3 / 3 / 4",
  "3 / 1 / 4 / 2",
  "2 / 2 / 4 / 3",
  "3 / 3 / 4 / 4",
];

const variant2GridAreas = ["1 / 1 / 2 / 2", "1 / 2 / 2 / 3", "1 / 3 / 2 / 4"];

const variant3GridAreas = [
  "1 / 1 / 3 / 2",
  "1 / 2 / 2 / 3",
  "2 / 2 / 3 / 3",
  "1 / 3 / 3 / 4",
];

const variant4GridAreas = ["1 / 1 / 2 / 2", "1 / 2 / 2 / 4"];

const variant5GridAreas = ["1 / 1 / 2 / 3", "1 / 3 / 2 / 4"];

const variant6GridAreas = ["1 / 1 / 3 / 3", "1 / 3 / 2 / 4", "2 / 3 / 3 / 4"];

const variant7GridAreas = [
  "1 / 1 / 3 / 2",
  "1 / 2 / 2 / 3",
  "2 / 2 / 3 / 3",
  "2 / 3 / 3 / 4",
  "1 / 3 / 2 / 4",
];

const GridContainer = styled(Box)<{
  variant: GridProps["variant"];
  gridHeight?: string;
  gap: keyof typeof spacingMap;
}>`
  display: grid;
  width: 100%;
  height: ${(props) => props.gridHeight || "auto"};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${(props) =>
    props.variant === "variant1"
      ? "repeat(3, 1fr)"
      : props.variant === "variant2"
        ? "1fr"
        : props.variant === "variant3"
          ? "repeat(2, 1fr)"
          : props.variant === "variant6" || props.variant === "variant7"
            ? "repeat(2, 1fr)"
            : "1fr"};
  grid-column-gap: ${(props) => spacingMap[props.gap]};
  grid-row-gap: ${(props) => spacingMap[props.gap]};
  overflow: hidden;
`;

const GridItem = styled(Box)<{ area: string }>`
  grid-area: ${(props) => props.area};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;

  > * {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
  variant = "variant1",
  style,
  children,
  gridHeight,
  gap = "SpacingSpacing1",
}) => {
  const gridAreas =
    variant === "variant1"
      ? variant1GridAreas
      : variant === "variant2"
        ? variant2GridAreas
        : variant === "variant3"
          ? variant3GridAreas
          : variant === "variant4"
            ? variant4GridAreas
            : variant === "variant5"
              ? variant5GridAreas
              : variant === "variant6"
                ? variant6GridAreas
                : variant7GridAreas;

  return (
    <GridContainer
      variant={variant}
      style={style}
      gridHeight={gridHeight}
      gap={gap}
    >
      {React.Children.map(children, (child, index) => (
        <GridItem key={index} area={gridAreas[index % gridAreas.length]}>
          {child}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;
