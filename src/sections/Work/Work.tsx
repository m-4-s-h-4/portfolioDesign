import React from "react";
import Container from "../../components/base components/Container/Container";
import WorkGrid from "../../components/work components/WorkGrid/WorkGrid";

const Work: React.FC = () => {
  return (
    <>
      <Container paddingTopBottom="SpacingSpacing1">
        <WorkGrid />
      </Container>
    </>
  );
};

export default Work;
