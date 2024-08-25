import React, { useEffect, useState } from "react";
import styles from "./styles";

type TextProps<
  T extends keyof JSX.IntrinsicElements | "h1" | "h2" | "h3" | "body" | "note",
> = {
  as?: T;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & Omit<
  JSX.IntrinsicElements[T extends keyof JSX.IntrinsicElements
    ? T
    : keyof JSX.IntrinsicElements],
  "ref"
>;

const Text = <
  T extends keyof JSX.IntrinsicElements | "h1" | "h2" | "h3" | "body" | "note",
>({
  as,
  children,
  style,
  ...props
}: TextProps<T>) => {
  const [isPhoneScreen, setIsPhoneScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneScreen(window.innerWidth <= 450);
      setIsSmallScreen(window.innerWidth <= 1145);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getComponent = (type: T | undefined): React.ElementType => {
    switch (type) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "body":
      case "note":
        return "p";
      default:
        return type || "p";
    }
  };

  const applyStyles = (as: T | undefined) => {
    const baseStyle = styles[as ?? "body"] || {};
    let mediaStyle: React.CSSProperties = {};

    if (isSmallScreen) {
      switch (as) {
        case "h2":
          mediaStyle.fontSize = "8vw";
          break;
        case "body":
          mediaStyle.fontSize = "2.4vw";
          break;
        default:
          break;
      }
    }

    if (isPhoneScreen) {
      switch (as) {
        case "h2":
          mediaStyle.fontSize = "6vw";
          break;
        case "body":
          mediaStyle.fontSize = "3.4vw";
          break;
        default:
          break;
      }
    }

    return { ...baseStyle, ...mediaStyle };
  };

  const Component = getComponent(as);

  return (
    <Component style={{ ...applyStyles(as), ...style }} {...props}>
      {children}
    </Component>
  );
};

export default Text;
