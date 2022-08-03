import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./Bannersec.css";
import bannerimg1 from "../../assets/images/bannerimg01.png";
import bannerimg2 from "../../assets/images/bannerimg02.png";
import bannerimg3 from "../../assets/images/bannerimg03.png";
import bannermain from "../../assets/images/bannermain.png";
const Bannersec = () => {
  return (
    <Container className="bannerSec" maxW="1180px">
      <Flex className="row" justifyContent="space-between">
        <Box className="bannerImg">
          <Box className="bannerimg01 ">
            <Image className="img-fluid" src={bannerimg1} alt="img" />
          </Box>

          <Box className="bannerimg02">
            <Image className="img-fluid " src={bannerimg2} alt="img" />
          </Box>

          <Box className="bannerimg03  ">
            <Image className="img-fluid" src={bannerimg3} alt="img" />
          </Box>

          <Box className=" responsivebutton">
            <Button className="btn btnlightblue me-3">Discover</Button>
            <Button className="btn btndarkblue">Create</Button>
          </Box>
        </Box>

        <Box className="bannercnt">
          <Box className="responsiveimge">
            <Image src={bannermain}></Image>
          </Box>
          <Heading className="textwhitecolor">
            Discover, collect, and sell{" "}
            <span className="textbluecolor">extraordinary NFTs</span>{" "}
          </Heading>
          <Text className="textgraycolor">
            on the world's first & largest NFT marketplace
          </Text>
          <Box className="bannerbtn ">
            <Button className="btnlightblue">Discover</Button>
            <Button className="btndarkblue">Create</Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Bannersec;
