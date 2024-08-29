import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";

export interface GridProps {
  variant?: "variant1" | "variant2" | "variant3" | "variant4" | "variant5";
  style?: React.CSSProperties;
  children: React.ReactNode;
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

const GridContainer = styled(Box)<{
  variant: "variant1" | "variant2" | "variant3" | "variant4" | "variant5";
}>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${(props) =>
    props.variant === "variant1"
      ? "repeat(3, 1fr)"
      : props.variant === "variant2"
        ? "1fr"
        : props.variant === "variant3"
          ? "repeat(2, 1fr)"
          : "1fr"};
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const GridItem = styled(Box)<{ area: string }>`
  grid-area: ${(props) => props.area};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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
            : variant5GridAreas;

  return (
    <GridContainer variant={variant} style={style}>
      {React.Children.map(children, (child, index) => (
        <GridItem key={index} area={gridAreas[index % gridAreas.length]}>
          {child}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Grid;
