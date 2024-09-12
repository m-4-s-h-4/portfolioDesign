import React from "react";
import styled from "styled-components";

import { spacingMap } from "../../../../utils/spacingMap";
import Box from "../../Primatives/Box/Box";

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
  grid-template-columns: repeat(3, 1fr); /* Default: 3 columns */
  grid-template-rows: ${(props) =>
    props.variant === "variant1"
      ? "repeat(3, 1fr)"
      : props.variant === "variant2"
        ? "1fr"
        : props.variant === "variant3"
          ? "repeat(2, 1fr)"
          : props.variant === "variant6" || props.variant === "variant7"
            ? "repeat(2, 1fr)"
            : props.variant === "variant5"
              ? "auto auto"
              : "1fr"};
  grid-column-gap: ${(props) => spacingMap[props.gap]};
  grid-row-gap: ${(props) => spacingMap[props.gap]};
  overflow: hidden;

  @media (max-width: 1145px) {
    grid-template-columns: 1fr 1fr; /* 2 columns */
    grid-template-rows: auto; /* 2 rows */

    ${(props) =>
      props.variant === "variant5" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2; /* First item in the first column */
        grid-row: 1 / 2; /* First row */
      }

      & > :nth-child(2) {
        grid-column: 2 / 3; /* Second item in the second column */
        grid-row: 1 / 2; /* First row */
      }

      & > :nth-child(3) {
        grid-column: 1 / 3; /* Third item spans both columns */
        grid-row: 2 / 3; /* Second row */
      }
    `}

    ${(props) =>
      props.variant === "variant1" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }

      & > :nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      & > :nth-child(3) {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
      }

      & > :nth-child(4) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }

      & > :nth-child(5) {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }

      & > :nth-child(6) {
        grid-column: 1 / 3;
        grid-row: 4 / 5;
      }
    `}

    ${(props) =>
      props.variant === "variant2" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      & > :nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      & > :nth-child(3) {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
      }
    `}

    ${(props) =>
      props.variant === "variant3" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }

      & > :nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      & > :nth-child(3) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }

      & > :nth-child(4) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }
    `}

    ${(props) =>
      props.variant === "variant4" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      & > :nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }
    `}

    ${(props) =>
      props.variant === "variant6" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }

      & > :nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      & > :nth-child(3) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    `}

    ${(props) =>
      props.variant === "variant7" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }

      & > :nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      & > :nth-child(3) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }

      & > :nth-child(4) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }
    `}
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column */
    grid-template-rows: auto auto;

    ${(props) =>
      props.variant === "variant5" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2; /* First item in the first column */
        grid-row: 1 / 2; /* First row */
      }

      & > :nth-child(2) {
        grid-column: 1 / 2; /* Second item in the first column */
        grid-row: 2 / 3; /* Second row */
      }

      & > :nth-child(3) {
        grid-column: 1 / 2; /* Third item in the first column */
        grid-row: 3 / 4; /* Third row */
      }
    `}

    ${(props) =>
      props.variant === "variant1" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      & > :nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }

      & > :nth-child(3) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }

      & > :nth-child(4) {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
      }

      & > :nth-child(5) {
        grid-column: 1 / 2;
        grid-row: 5 / 6;
      }

      & > :nth-child(6) {
        grid-column: 1 / 2;
        grid-row: 6 / 7;
      }
    `}

    ${(props) =>
      props.variant === "variant2" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      & > :nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }

      & > :nth-child(3) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
    `}

    ${(props) =>
      props.variant === "variant3" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      & > :nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }

      & > :nth-child(3) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }

      & > :nth-child(4) {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
      }
    `}

    ${(props) =>
      props.variant === "variant4" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      & > :nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
    `}

    ${(props) =>
      props.variant === "variant6" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      & > :nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }

      & > :nth-child(3) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
    `}

    ${(props) =>
      props.variant === "variant7" &&
      `
      & > :nth-child(1) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      & > :nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }

      & > :nth-child(3) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }

      & > :nth-child(4) {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
      }
    `}
  }
`;

const GridItem = styled(Box)<{ area: string }>`
  grid-area: ${(props) => props.area};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%; /* Ensure GridItem takes full height */

  > * {
    width: 100%;
    height: 100%; /* Ensure children take full height */
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
