import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";

export interface GridProps {
  variant?: "variant1" | "variant2" | "variant3";
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const variant1GridAreas = [
  "1 / 1 / 3 / 2", // div1
  "1 / 2 / 2 / 3", // div2
  "1 / 3 / 3 / 4", // div3
  "3 / 1 / 4 / 2", // div4
  "2 / 2 / 4 / 3", // div5
  "3 / 3 / 4 / 4", // div6
];

const variant2GridAreas = [
  "1 / 1 / 2 / 2", // div1
  "1 / 2 / 2 / 3", // div2
  "1 / 3 / 2 / 4", // div3
];

const variant3GridAreas = [
  "1 / 1 / 3 / 2", // div1
  "1 / 2 / 2 / 3", // div2
  "2 / 2 / 3 / 3", // div3
  "1 / 3 / 3 / 4", // div4
];

const GridContainer = styled(Box)<{
  variant: "variant1" | "variant2" | "variant3";
}>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${(props) =>
    props.variant === "variant1"
      ? "repeat(3, 1fr)"
      : props.variant === "variant2"
        ? "1fr"
        : "repeat(2, 1fr)"};
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const GridItem = styled(Box)<{ area: string }>`
  grid-area: ${(props) => props.area};
  overflow: hidden;

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
        : variant3GridAreas;

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
