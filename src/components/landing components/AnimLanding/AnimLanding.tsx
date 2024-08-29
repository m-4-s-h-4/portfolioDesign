import React, { CSSProperties, useEffect } from "react";

const AnimLanding: React.FC = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      `@keyframes orbit {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }`,
      styleSheet.cssRules.length
    );
    styleSheet.insertRule(
      `@keyframes orbitReverse {
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg); }
      }`,
      styleSheet.cssRules.length
    );
    styleSheet.insertRule(
      `@keyframes orbitPause {
        0%, 20%, 40%, 60%, 80%, 100% { transform: rotate(0deg); }
        10%, 30%, 50%, 70%, 90% { transform: rotate(180deg); }
      }`,
      styleSheet.cssRules.length
    );
  }, []);

  return (
    <div style={circleContainerStyle}>
      <div style={centralCircleStyle}></div>
      <div style={outerCircleStyle}></div>
      <div style={middleCircleStyle}></div>
      <div style={innerCircleStyle}></div>

      <div style={orbitContainerStyle}>
        <div style={animatedCircleStyle}></div>
      </div>

      <div style={orbitContaineOneStyle}>
        <div style={animatedCircleOneStyle}></div>
      </div>

      <div style={orbitContainerTwoStyle}>
        <div style={animatedCircleTwoStyle}></div>
      </div>

      <div style={orbitContainerThreeStyle}>
        <div style={animatedCircleThreeStyle}></div>
      </div>

      <div style={orbitContainerFourStyle}>
        <div style={animatedCircleFourStyle}></div>
      </div>

      <div style={orbitContainerFiveStyle}>
        <div style={animatedCircleFiveStyle}></div>
      </div>
    </div>
  );
};

const circleContainerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const centralCircleStyle: CSSProperties = {
  position: "absolute",
  width: "29vmin",
  height: "29vmin",
  borderRadius: "50%",
  backgroundImage:
    "linear-gradient(180deg, rgba(255,27,9,1) 0%, rgba(255,27,9,0) 100%)",
  zIndex: 10,
};

const outerCircleStyle: CSSProperties = {
  position: "absolute",
  width: "80vmin",
  height: "80vmin",
  border: "2px solid black",
  borderRadius: "50%",
};

const middleCircleStyle: CSSProperties = {
  position: "absolute",
  width: "60vmin",
  height: "60vmin",
  border: "2px solid black",
  borderRadius: "50%",
};

const innerCircleStyle: CSSProperties = {
  position: "absolute",
  width: "40vmin",
  height: "40vmin",
  border: "2px solid black",
  borderRadius: "50%",
};

const orbitContainerStyle: CSSProperties = {
  position: "absolute",
  mixBlendMode: "difference",
  width: "90vmin",
  height: "90vmin",
  borderRadius: "50%",
  animation: "orbit 5s linear infinite",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

const animatedCircleStyle: CSSProperties = {
  width: "10vmin",
  height: "10vmin",
  background: "white",
  mixBlendMode: "difference",
  borderRadius: "50%",
};

const orbitContaineOneStyle: CSSProperties = {
  position: "absolute",
  mixBlendMode: "difference",
  width: "87vmin",
  height: "87vmin",
  borderRadius: "50%",
  animation: "orbitReverse 10s linear infinite",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

const animatedCircleOneStyle: CSSProperties = {
  width: "7vmin",
  height: "7vmin",
  background: "white",
  mixBlendMode: "difference",
  borderRadius: "50%",
};

const orbitContainerTwoStyle: CSSProperties = {
  position: "absolute",
  mixBlendMode: "difference",
  width: "65vmin",
  height: "65vmin",
  borderRadius: "50%",
  animation: "orbit 12s linear infinite",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

const animatedCircleTwoStyle: CSSProperties = {
  width: "5vmin",
  height: "5vmin",
  background: "white",
  mixBlendMode: "difference",
  borderRadius: "50%",
};

const orbitContainerThreeStyle: CSSProperties = {
  position: "absolute",
  mixBlendMode: "difference",
  width: "43vmin",
  height: "43vmin",
  borderRadius: "50%",
  animation: "orbit 8s linear infinite",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

const animatedCircleThreeStyle: CSSProperties = {
  width: "3vmin",
  height: "3vmin",
  background: "white",
  mixBlendMode: "difference",
  borderRadius: "50%",
};

const orbitContainerFourStyle: CSSProperties = {
  position: "absolute",
  mixBlendMode: "difference",
  width: "42vmin",
  height: "42vmin",
  borderRadius: "50%",
  animation: "orbitReverse 7s linear infinite",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

const animatedCircleFourStyle: CSSProperties = {
  width: "2vmin",
  height: "2vmin",
  background: "white",
  mixBlendMode: "difference",
  borderRadius: "50%",
};

const orbitContainerFiveStyle: CSSProperties = {
  position: "absolute",
  mixBlendMode: "difference",
  width: "83vmin",
  height: "83vmin",
  borderRadius: "50%",
  animation: "orbit 6s linear infinite",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};

const animatedCircleFiveStyle: CSSProperties = {
  width: "3vmin",
  height: "3vmin",
  background: "white",
  mixBlendMode: "difference",
  borderRadius: "50%",
};

export default AnimLanding;
