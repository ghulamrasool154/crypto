import React, { Component } from "react";
import { Box, Text, Flex, Image, Tr, Td } from "@chakra-ui/react";
import "./Abs_Table.css";
const Abs_Table = (props) => {
  const {
    id,
    photo,
    heading,
    diaIcon,
    vol,
    hours,
    days,
    price,
    owner,
    assest,
  } = props;
  return (
    <>
      <Tr className="abs-table">
        <Td className="first-section">
          <Box className="numbr-section">
            <Flex>
              <Box className="id">
                <Text>{id}</Text>
              </Box>
              <Box>
                <Image src={photo} alt="photo" />
              </Box>
              <Box className="heading">
                <Text>{heading}</Text>
              </Box>
            </Flex>
          </Box>
        </Td>
        <Td>
          <Box className="volume">
            <Flex className="volume-inner">
              <Image src={diaIcon} />
              <Text> {vol}</Text>
            </Flex>
          </Box>
        </Td>
        <Td>
          <Box className="hours">
            <Text>{hours}</Text>
          </Box>
        </Td>
        <Td>
          <Box className="days">
            <Text>{days}</Text>
          </Box>
        </Td>
        <Td>
          <Box className="price">
            <Flex className="iconNPirce">
              <Image src={diaIcon} />
              <Text>{price}</Text>
            </Flex>
          </Box>
        </Td>
        <Td>
          <Box className="owner">
            <Text>{owner}</Text>
          </Box>
        </Td>
        <Td>
          <Box className="assest">
            <Text>{assest}</Text>
          </Box>
        </Td>
      </Tr>
    </>
  );
};
export default Abs_Table;
