import React from "react";
import Container from "../../components/base components/Container/Container";
import WorkGrid from "../../components/work components/WorkGrid/WorkGrid";
import Divider from "../../components/base components/Divider/Divider";

const Work: React.FC = () => {
  return (
    <>
      {/* <Divider paddingLeftRight="SpacingSpacing0" /> */}
      <Container paddingTopBottom="SpacingSpacing1">
        <WorkGrid />
      </Container>
    </>
  );
};

export default Work;
