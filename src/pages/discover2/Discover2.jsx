import React, { useState } from "react";
import "./Discover2.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import rankinghighlight from "../../assets/images/rankinglightbg.svg";
import authorImg from "../../assets/images/discoveritemimg01.jpg";
import priceicon from "../../assets/images/priceicon.svg";
import hearticon from "../../assets/images/hearticon.svg";
import closeicon from "../../assets/images/closeicon.svg";
import {
  Container,
  Box,
  Image,
  Heading,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Flex,
} from "@chakra-ui/react";
import PopupModelDisc from "../../components/discoverpopupmodel/PopupModelDisc";
import Titlebartags from "../../components/titlebarTags/Titlebartags";
const Discover2 = () => {
  const [modelShow, setModelShow] = useState(false);
  const toggleModel = () => {
    setModelShow(!modelShow);
  };
  const [itemSection, setItemSection] = useState([
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
    {
      id: "9",
    },
    {
      id: "10",
    },

    {
      id: "11",
    },
  ]);

  return (
    <>
    <Titlebartags title='CryptoN : Discover '/>
      <section className="discover2-page">
        <Container pt={12} maxW="1180px" className="collection-page-all">
          {/* discover top section start here */}

          <Box className="discover2-first-section">
            <Box className="Discover2-heading">
              <Heading as="h2">Discover</Heading>
            </Box>
            <Box className="catrgoryNbuttons">
              <Box className="discover2-left-section">
                <Box className="discover-menu-upper">
                  <Menu>
                    <MenuButton
                      className="button-tab"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      All categories
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Memes</MenuItem>
                      <MenuItem>Photography</MenuItem>
                      <MenuItem>Digital</MenuItem>
                      <MenuItem>News</MenuItem>
                      <MenuItem>Music</MenuItem>
                      <MenuItem>Domain names</MenuItem>
                      <MenuItem>Virtual worlds</MenuItem>
                      <MenuItem>trading cards</MenuItem>
                      <MenuItem>Sports</MenuItem>
                      <MenuItem>Utility</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box className="discover-menu-upper">
                  <Menu>
                    <MenuButton
                      className="button-tab"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Status
                    </MenuButton>
                    <MenuList>
                      <MenuItem>By now</MenuItem>
                      <MenuItem>On auction</MenuItem>
                      <MenuItem>News</MenuItem>
                      <MenuItem>Has Offers</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box className="discover-menu-upper">
                  <Menu>
                    <MenuButton
                      className="button-tab"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Currency
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Currency</MenuItem>
                      <MenuItem>USD</MenuItem>
                      <MenuItem>Ethereum</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Box>
              <Box className="discover2-right-section">
                <Box>
                  <Button className="discover-2-buttons">Arts</Button>
                  <Button className="discover-2-buttons">Bids</Button>
                  <Button className="discover-2-buttons">Photography</Button>
                </Box>
                <Box className="clearbutton">
                  <Button className="discover-2-buttons close">
                    Clear All <Image src={closeicon} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* discover top section ends here */}

          <Box className="four-tabs-collection">
            <Flex className="row tabs">
              <Box className="menu1">
                <Menu>
                  <MenuButton
                    className="button-tab"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Price
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Highest Price</MenuItem>
                    <MenuItem>Lowest Price</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box className="menu2">
                <Menu>
                  <MenuButton
                    className="button-tab"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Newest
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Newest</MenuItem>
                    <MenuItem>Oldest</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box className="menu3">
                <Menu>
                  <MenuButton
                    className="button-tab"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    All Items
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Single Items</MenuItem>
                    <MenuItem>Bundles</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>

            <Box className="aboutItem-Collections">
              {itemSection.map((e, idx) => {
                return (
                  <Box className="aboutItem-collecton-box" key={idx}>
                    <Box className="aboutItemImg">
                      <Image src={authorImg} className="aurImg" />
                    </Box>
                    <Box className="aboutItemData">
                      <Box className="itemtitleCode">
                        <Heading as="h2" className="title-item">
                          Cryptosharks
                        </Heading>
                        <Heading as="h3" className="title-code--">
                          Cryptosharks #4939
                        </Heading>
                      </Box>
                      <Box className="itemTitlePrice">
                        <Heading as="h2" className="price-items--">
                          Price
                        </Heading>
                        <Heading as="h3" className="pirce-strong-val">
                          <Image src={priceicon} />
                          <strong>0, 006</strong>
                        </Heading>
                        <Heading as="h4" className="heart-cion">
                          <span>
                            <Image src={hearticon} />
                          </span>
                          56
                        </Heading>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box className="filter-btn">
              <Button className="discover2-filter-btn" onClick={toggleModel}>
                Filter
              </Button>
              {modelShow && <PopupModelDisc toggleModel={toggleModel} />}
            </Box>
          </Box>
          {/* <Flex className="row--authors--popup">
          <Button className="authors--filter--button" >
            {" "}
            Filter
          </Button>
        
        </Flex> */}
        </Container>
        <Box className="discover2-rankinglightbg">
          <Image src={rankinghighlight}></Image>
        </Box>
      </section>
    </>
  );
};
export default Discover2;
