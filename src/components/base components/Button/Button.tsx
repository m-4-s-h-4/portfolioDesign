import React from "react";
import styled from "styled-components";
import Box from "../Primatives/Box/Box";
import Heading from "../TypographyComponents/Heading/Heading";
import { SpacingSpacing2, SpacingSpacing3 } from "../../../tokens/js/variables";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const StyledButton = styled(Box)`
  cursor: pointer;
  background-color: #ff3939;
  border-radius: 50px;
  padding: ${SpacingSpacing2} ${SpacingSpacing3};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.3s ease;
  width: auto;

  &:hover {
    background-color: #ff3939;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Heading level={"h3"}>{text}</Heading>
    </StyledButton>
  );
};

export default Button;
