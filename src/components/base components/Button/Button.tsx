import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Box from "../Primatives/Box/Box";

import {
  BackgroundColorDark,
  SpacingSpacing1,
  SpacingSpacing2,
} from "../../../tokens/js/variables";
import Link from "../TypographyComponents/Link/Link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  link?: string; // New prop for navigation
}

const StyledButton = styled(Box)`
  cursor: pointer;
  background-color: ${BackgroundColorDark};
  border-radius: 10px;
  padding: ${SpacingSpacing1} ${SpacingSpacing2};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.3s ease;
  width: auto;
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, link }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (link) {
      navigate(link);
    }
  };

  return (
    <StyledButton onClick={handleClick}>
      {link ? (
        <Link href={link} color="light">
          {text}
        </Link>
      ) : (
        <span style={{ color: "light" }}>{text}</span>
      )}
    </StyledButton>
  );
};

export default Button;
