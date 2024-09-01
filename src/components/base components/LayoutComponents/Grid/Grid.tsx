import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";

export interface GridProps {
  variant?:
    | "variant1"
    | "variant2"
    | "variant3"
    | "variant4"
    | "variant5"
    | "variant6"
    | "variant7"; // Add the new variant7 here
  style?: React.CSSProperties;
  children: React.ReactNode;
  gridHeight?: string; // Ensure this prop is available here
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

const variant4GridAreas = [
  "1 / 1 / 2 / 2", // div1
  "1 / 2 / 2 / 4", // div2
];

const variant5GridAreas = [
  "1 / 1 / 2 / 3", // div1
  "1 / 3 / 2 / 4", // div2
];

const variant6GridAreas = [
  "1 / 1 / 3 / 3", // div1
  "1 / 3 / 2 / 4", // div2
  "2 / 3 / 3 / 4", // div3
];

const variant7GridAreas = [
  "1 / 1 / 3 / 2", // div1
  "1 / 2 / 2 / 3", // div2
  "2 / 2 / 3 / 3", // div3
  "2 / 3 / 3 / 4", // div4
  "1 / 3 / 2 / 4", // div5
];

const GridContainer = styled(Box)<{
  variant:
    | "variant1"
    | "variant2"
    | "variant3"
    | "variant4"
    | "variant5"
    | "variant6"
    | "variant7";
  gridHeight?: string;
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
            ? "repeat(2, 1fr)" // Distribute height evenly among 2 rows for variant6 and variant7
            : "1fr"};
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  overflow: hidden;
`;

const GridItem = styled(Box)<{ area: string }>`
  grid-area: ${(props) => props.area};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%; /* Ensure that each grid item takes the full height of its area */

  > * {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }

  img {
    width: 100%;
    height: 100%; /* Ensure image takes full height */
    object-fit: cover;
  }
`;

const Grid: React.FC<React.PropsWithChildren<GridProps>> = ({
  variant = "variant1",
  style,
  children,
  gridHeight, // Accept gridHeight prop
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
                : variant7GridAreas; // Use variant7GridAreas for variant7

  return (
    <GridContainer variant={variant} style={style} gridHeight={gridHeight}>
      {React.Children.map(children, (child, index) => (
        <GridItem key={index} area={gridAreas[index % gridAreas.length]}>
          {child}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;
