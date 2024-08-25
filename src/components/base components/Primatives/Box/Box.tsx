import styled from "styled-components";
import { spacingMap } from "../../../../utils/spacingMap";

interface BoxProps {
  backgroundColor?: string;
  size?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  paddingTop?: keyof typeof spacingMap;
  paddingBottom?: keyof typeof spacingMap;
  paddingLeft?: keyof typeof spacingMap;
  paddingRight?: keyof typeof spacingMap;
  displayFlex?: boolean;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
  justifyContent?: "flex-start" | "flex-end" | "center";
  height?: string;
  borderPosition?: "top" | "bottom";
}

const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  width: ${(props) => (props.fullWidth ? "100%" : props.size || "auto")};
  height: ${(props) => (props.fullHeight ? "100%" : props.height || "auto")};
  padding-top: ${(props) => spacingMap[props.paddingTop || "SpacingSpacing0"]};
  padding-bottom: ${(props) =>
    spacingMap[props.paddingBottom || "SpacingSpacing0"]};
  padding-left: ${(props) =>
    spacingMap[props.paddingLeft || "SpacingSpacing0"]};
  padding-right: ${(props) =>
    spacingMap[props.paddingRight || "SpacingSpacing0"]};
  box-sizing: border-box;
  overflow: hidden;

  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

export default Box;
