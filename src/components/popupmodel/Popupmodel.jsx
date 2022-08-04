import React from "react";
import "./Popupmodel.css";
import { Flex, Button, Box, Image, Select } from "@chakra-ui/react";
import closebutton from "../../assets/images/closemenu.PNG";

const Popupmodel = ({ toggleModel }) => {
  return (
    <>
      <Box className="popup--filter--modal--dialog">
        <Image
          src={closebutton}
          className="close--icon"
          onClick={toggleModel}
        ></Image>
        <Box className="popup--modal--content">
          <Box className="popup--modal--body">
            <Box className="modal--top">
              <Box className="authors--days">
                <Select>
                  <option value="Last 7 days"> Last 7 days</option>
                  <option value="Last 30 days">Last 30 days</option>
                  <option value="All the time">All the time</option>
                </Select>
              </Box>
              <Box className="authors--category">
                <Select placeholder="All categories">
                  <option>Memes</option>
                  <option>Photography</option>
                  <option>Digital</option>
                  <option>News</option>
                  <option>Music</option>
                  <option>Domain names</option>
                  <option>Virtual worlds</option>
                  <option>Trading cards</option>
                  <option>Sports</option>
                  <option>Utility</option>
                </Select>
              </Box>
              <Box className="authors--chain">
                <Select placeholder=" All chains">
                  <option value="Ethereum">Ethereum</option>
                  <option value="Polygon">Polygon</option>
                  <option value="Klaytn">Klaytn</option>
                </Select>
              </Box>
            </Box>
            <Box className="modal--bottom">
              <Button className="authors--filter--button" onClick={toggleModel}>
                {" "}
                Apply
              </Button>
              <Button className="authors--filter--button" onClick={toggleModel}>
                {" "}
                Clear All
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Popupmodel;
