import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import LastAddSlider from "../LastAddSlider/LastAddSlider";
import "./LastAdded.css";
const LastAdded = () => {
  return (
    <Container className="LastAdded" maxW={"1180px"}>
      <Flex className="row">
        <Box className="column" width={"100%"} >
          <Heading className="lastheading text-center-class-cutom">
            Last Added Items
          </Heading>
          <LastAddSlider/>
        </Box>
      </Flex>
    
    </Container>
  );
};

export default LastAdded;
