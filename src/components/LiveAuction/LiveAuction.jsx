import React from "react";
import "./LiveAuction.css";
import { Container, Flex, Box , Heading} from "@chakra-ui/react";
import LiveAutionSlider from "./LiveAutionSlider/LiveAutionSlider";
const LiveAuction = () => {
  return (
    <Container maxW={"1180px"} className="liveaction">
      <Flex className="row">
        <Box maxW={"100%"}>
        <Heading className="lastheading text-center-class-cutom"> Live Auction
</Heading>
          <LiveAutionSlider />
        </Box>
      </Flex>
    </Container>
  );
};

export default LiveAuction;
