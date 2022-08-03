import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import PcTabs from "./tabs/PcTabs";
import "./popularcollection.css";

const Popularcollection = () => {
  return (
    <Container className="popularCollection" maxW="1180px">
      <Flex>
        <Box width={"100%"}>
          <Heading className="popularheading text-center-class-cutom">Popular collections</Heading>
          <PcTabs />


        </Box>


      </Flex>
    </Container>
  );
};

export default Popularcollection;
