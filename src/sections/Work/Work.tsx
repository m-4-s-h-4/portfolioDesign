import React from "react";
import Heading from "../../components/base components/TypographyComponents/Heading/Heading";
import Grid from "../../components/base components/LayoutComponents/Grid/Grid";

const Work: React.FC = () => {
  return (
    <>
      <Heading level="h1" color="dark" align="center">
        work
      </Heading>
      <Grid>
        <img
          src="https://assets.awwwards.com/awards/external/2021/11/6197a9da23509307848534_static.jpeg"
          alt="Placeholder 1"
        />
        <img
          src="https://assets.awwwards.com/awards/external/2021/11/6197a9da23509307848534_static.jpeg"
          alt="Placeholder 2"
        />
        <img
          src="https://assets.awwwards.com/awards/external/2021/11/6197a9da23509307848534_static.jpeg"
          alt="Placeholder 3"
        />
        <img
          src="https://assets.awwwards.com/awards/external/2021/11/6197a9da23509307848534_static.jpeg"
          alt="Placeholder 4"
        />
        <img
          src="https://assets.awwwards.com/awards/external/2021/11/6197a9da23509307848534_static.jpeg"
          alt="Placeholder 5"
        />
        <img
          src="https://assets.awwwards.com/awards/external/2021/11/6197a9da23509307848534_static.jpeg"
          alt="Placeholder 6"
        />
      </Grid>
    </>
  );
};

export default Work;
