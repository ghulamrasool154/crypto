import React, { useState } from "react";
import { Container, Flex, Box, Heading, Image, Text } from "@chakra-ui/react";
import "./sellsnfts.css";
import setupwalleticon from "../../assets/images/setupwalleticon.svg";
import collectionicon from "../../assets/images/collectionicon.svg";
import addyouricon from "../../assets/images/addyouricon.svg";
import listthemicon from "../../assets/images/listthemicon.svg";

const Sellsnfts = () => {
  const [selList, setSelList] = useState([
    {
      _id: "1",
      title: "Set up your wallet",
      dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
      icon: setupwalleticon,
    },
    {
      _id: "2",
      title: "Create your collection      ",
      dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
      icon: collectionicon,
    },
    {
      _id: "3",
      title: "Add your NFTs",
      dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
      icon: addyouricon,
    },
    {
      _id: "4",
      title: "List them for sale",
      dis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
      icon: listthemicon,
    },
  ]);
  return (
    <Container className="Sellsnfts" maxW="1180px">
      <Flex className="row" maxW="100%">
        <Box width='100%'>
          <Heading className="sellsnfts text-center-class-cutom"> Create and Sell your NFTs</Heading>
        </Box>
      </Flex>
      <Flex className="row sellsnfts-row">
        {selList.map((element) => {
          return (
            <Box className="columnBox" key={element._id}>
              <Box className="createsell">
                <Box className="createsellHead">
                  <Box className="creatsellicon">
                    <Image src={element.icon}></Image>
                  </Box>
                  <Heading className="create-title">{element.title}</Heading>
                </Box>
                <Box className="createsellDisc">
                  <Text>{element.dis}</Text>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Sellsnfts;
