import React from "react";
import Stack from "../../base components/LayoutComponents/Stack/Stack";
import Link from "../../base components/TypographyComponents/Link/Link";

import styled from "styled-components";

const Separator = styled.span`
  color: inherit;
`;

const Category: React.FC = () => {
  return (
    <Stack direction="horizontal" gap="SpacingSpacing2">
      <Link href="/motion-graphics" color="dark">
        Motion Graphics
      </Link>
      <Separator>.</Separator>
      <Link href="/ui-design" color="dark">
        UI Design
      </Link>
      <Separator>.</Separator>
      <Link href="/other" color="dark">
        Other
      </Link>
    </Stack>
  );
};

export default Category;
