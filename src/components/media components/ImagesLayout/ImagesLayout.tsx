import React from "react";
import styled from "styled-components";
import Grid from "../../base components/LayoutComponents/Grid/Grid";
import Box from "../../base components/Primatives/Box/Box";
export interface ImagesLayoutProps {
  variant?: "fullWidth" | "variant1" | "variant2" | "variant3";
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const FullWidthImage = styled(Box)`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

const ImagesLayout: React.FC<ImagesLayoutProps> = ({
  variant = "fullWidth",
  style,
  children,
}) => {
  if (variant === "fullWidth") {
    // Full-width image layout
    return (
      <FullWidthImage style={style}>
        {React.Children.map(children, (child) => (
          <>{child}</>
        ))}
      </FullWidthImage>
    );
  }

  // For grid variants, use the Grid component
  return (
    <Grid variant={variant} style={style}>
      {children}
    </Grid>
  );
};

export default ImagesLayout;
