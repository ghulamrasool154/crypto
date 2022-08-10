import React from "react";
import "./Popmodel.css";
import { Flex, Button, Box, Image, Select } from "@chakra-ui/react";
import closebutton from "../../assets/images/closemenu.PNG";

const PopupModelDisc = ({ toggleModel }) => {
  return (
    <>
      <Box className="discover2-popup-filter-modal-dialog">
        <Image
          src={closebutton}
          className="close--icon"
          onClick={toggleModel}
        ></Image>
        <Box className="discover2-popup-modal-content">
          <Box className="discover2-popup-modal-body">
            <Box className="modal-top">
              <Box className="discover2-popup-buttons">
                <Button>Arts</Button>
                <Button>Bids</Button>
                <Button>Photography</Button>
              </Box>

              <Box className="discover2-authors-days">
                <Select>
                  <option value="Last 7 days"> All category</option>
                  <option value="Last 30 days">Memes</option>
                  <option value="All the time">Photography</option>
                  <option value="All the time">Photography</option>
                  <option value="All the time">Digital</option>
                  <option value="All the time">News</option>
                  <option value="All the time">Music</option>
                  <option value="All the time">Doamin name</option>
                  <option value="All the time">Virtual Worlds</option>
                  <option value="All the time">Trading Cards</option>
                  <option value="All the time">Sports</option>
                  <option value="All the time">utility</option>
                </Select>
              </Box>
              <Box className="authors-category status">
                <Select placeholder="Status">
                  <option>By now</option>
                  <option>On auction</option>
                  <option>New</option>
                  <option>Has Offer</option>
                </Select>
              </Box>
              <Box className="authors-chain">
                <Select placeholder="Currency">
                  <option value="Ethereum">Currency</option>
                  <option value="Polygon">USD</option>
                  <option value="Klaytn">Ethereum</option>
                </Select>
              </Box>
            </Box>
            <Box className="discover2-lower-section-popup-modal">
              <Box className="authors-chain">
                <Select placeholder="Price">
                  <option value="Ethereum">Price</option>
                  <option value="Polygon">Highest Price</option>
                  <option value="Klaytn">Lowest Price</option>
                </Select>
              </Box>
              <Box className="authors-chain">
                <Select placeholder="Newest">
                  <option value="Ethereum">Newest</option>
                  <option value="Polygon">Oldest</option>
                </Select>
              </Box>
              <Box className="authors-chain">
                <Select placeholder="All items">
                  <option value="Ethereum">Single items</option>
                  <option value="Polygon">Bundles</option>
                </Select>
              </Box>
            </Box>
            <Box className="discover2-modal-bottom">
              <Button
                className="discover2-authors-filter-button discover2-apply"
                onClick={toggleModel}
              >
                Apply
              </Button>
              <Button
                className="discover2-authors-filter-button clearalll"
                onClick={toggleModel}
              >
                Clear All
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PopupModelDisc;
