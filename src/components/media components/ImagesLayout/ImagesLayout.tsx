import React from "react";
import styled from "styled-components";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import Box from "../../base components/Primatives/Box/Box";
import { spacingMap } from "../../../utils/spacingMap";

export interface ImagesLayoutProps {
  variant?:
    | "fullWidth"
    | "variant1"
    | "variant2"
    | "variant3"
    | "variant5"
    | "variant6"
    | "variant7";
  style?: React.CSSProperties;
  children: React.ReactNode;
  paddingTopBottom?: keyof typeof spacingMap;
  imageHeight?: string;
  fullWidthHeight?: string;
  gridHeight?: string; // Prop to specify the height of the grid
}

const PaddedContainer = styled.div<{ paddingTopBottom: string }>`
  padding-top: ${(props) => props.paddingTopBottom};
  padding-bottom: ${(props) => props.paddingTopBottom};
`;

const StyledImage = styled.img<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  display: block;
  object-fit: cover;
  border-radius: 10px;
`;

const FullWidthImage = styled(Box)<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || "100%"};
`;

const GridContainerWithHeight = styled(Grid)<{ gridHeight?: string }>`
  height: ${(props) =>
    props.gridHeight || "auto"}; // Apply gridHeight prop here
  grid-auto-rows: 1fr; /* Ensures rows expand to fill height */
`;

const renderChildrenWithDynamicHeight = (
  children: React.ReactNode,
  height?: string
) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === "img") {
      return (
        <StyledImage
          src={child.props.src}
          alt={child.props.alt}
          height={height}
        />
      );
    }
    return child;
  });
};

const ImagesLayout: React.FC<ImagesLayoutProps> = ({
  variant = "fullWidth",
  style,
  children,
  paddingTopBottom = "SpacingSpacing2",
  imageHeight,
  fullWidthHeight,
  gridHeight, // Accept the gridHeight prop
}) => {
  const paddingTopBottomValue = spacingMap[paddingTopBottom];

  const heightToApply =
    variant === "fullWidth" ? fullWidthHeight || imageHeight : imageHeight;

  return (
    <PaddedContainer paddingTopBottom={paddingTopBottomValue}>
      {variant === "fullWidth" ? (
        <FullWidthImage style={style} height={heightToApply}>
          {renderChildrenWithDynamicHeight(children, heightToApply)}
        </FullWidthImage>
      ) : (
        <GridContainerWithHeight
          variant={variant}
          style={style}
          gridHeight={gridHeight} // Pass the gridHeight prop here
        >
          {renderChildrenWithDynamicHeight(children, heightToApply)}
        </GridContainerWithHeight>
      )}
    </PaddedContainer>
  );
};

export default ImagesLayout;
