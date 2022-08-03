import React, { Component } from "react";
import "./Second_Abs_Table.css";
import { Tbody, Tr, Td, Box, Image } from "@chakra-ui/react";
const Second_Abs_Table = (props) => {
  const { id, mobimage, diaIcon } = props;
  return (
    <>
      <Tr>
        <Td>
          <Box className="second-table">
            <Box className="mob-id">{id}</Box>
            <Box className="mobiimg">
              <Image src={mobimage} alt="img" />
            </Box>
            <Box>
              <p className="name">Metasaurs by Dr. DMT</p>
              <Box className="icon-sec">
                <Image src={diaIcon} alt="image" className="mobileImage" />
                <p className="ratio"> 8 921,77</p>
              </Box>
            </Box>
          </Box>
        </Td>
        <Td>
          <p className="price">+ 69,5%</p>
        </Td>
      </Tr>
    </>
  );
};
export default Second_Abs_Table;
