import React from "react";

import Container from "../../components/base components/Container/Container";
import FooterAnim from "../../components/footer components/FooterAnim/FooterAnim";
import FooterLinks from "../../components/footer components/FooterLinks/FooterLinks";
import Flex from "../../components/base components/LayoutComponents/Flex/Flex";

const Footer: React.FC = () => {
  return (
    <Container backgroundColor="dark" height="auto">
      <Flex direction="column" xAlign="center" yAlign="center">
        <FooterLinks />
      </Flex>
      <FooterAnim />
    </Container>
  );
};

export default Footer;
