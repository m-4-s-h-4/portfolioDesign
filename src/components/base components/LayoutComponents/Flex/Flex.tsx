import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";
import { spacingMap } from "../../../../utils/spacingMap";

export interface FlexProps {
  grow?: number;
  shrink?: number;
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  xAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  yAlign?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: keyof typeof spacingMap;
  variant?: "default" | "doubleFlex";
  children?: React.ReactNode;
}

const FlexContainer = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-grow: ${(props) => props.grow ?? 0};
  flex-shrink: ${(props) => props.shrink ?? 1};
  align-items: ${(props) => props.yAlign || "stretch"};
  justify-content: ${(props) => props.xAlign || "flex-start"};
  gap: ${(props) => spacingMap[props.gap || "SpacingSpacing0"]};
  width: 100%;
  overflow-y: auto; /* Make the parent container scrollable */

  ${(props) =>
    props.variant === "doubleFlex" &&
    `
    > div:first-child {
      flex: 1; /* First box takes 1 part */
      min-height: 200px; /* Ensure a minimum height */
      overflow-y: hidden; /* Disable independent scrolling */
      display:flex;
  
      justify-content:space-between;
    }

    > div:last-child {
      flex: 2; /* Second box takes 2 parts */
      overflow-y: auto; /* Disable independent scrolling */
      min-height: 200px; /* Ensure a minimum height */
    }

    @media (max-width: 1145px) {
      flex-direction: column;

      > div:first-child,
      > div:last-child {
        flex: none; /* Allow each box to take its natural height */
        padding-left: 0;
        border-left: none; /* Remove border in stacked mode */
        min-height: auto; /* Let height adjust based on content */
        max-height: none; /* Remove any height limitations */
      }
    }
  `}
`;

const Flex: React.FC<React.PropsWithChildren<FlexProps>> = ({
  grow = 0,
  shrink = 1,
  direction = "row",
  wrap = "nowrap",
  xAlign = "flex-start",
  yAlign = "stretch",
  gap = "SpacingSpacing0",
  variant = "default",
  children,
}) => {
  return (
    <FlexContainer
      grow={grow}
      shrink={shrink}
      direction={direction}
      wrap={wrap}
      xAlign={xAlign}
      yAlign={yAlign}
      gap={gap}
      variant={variant}
    >
      {children}
    </FlexContainer>
  );
};

export default Flex;
