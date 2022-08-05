import React, { Component, useState } from "react";
import "./Collection.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Container,
  Box,
  Image,
  UnorderedList,
  ListItem,
  Link,
  Heading,
  Text,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Flex,
} from "@chakra-ui/react";
import collectionimg from "../../assets/images/authoprofilebannerimg.png";
import collectionbottomicon from "../../assets/images/authorproicon01.png";
import activity from "../../assets/images/activityicon.svg";
import discord from "../../assets/images/discordbutton.svg";
import insta from "../../assets/images/insta.svg";
import twitter from "../../assets/images/twitter.svg";
import authorImg from "../../assets/images/authoreitemimg01.png";
import priceicon from "../../assets/images/priceicon.svg";
import hearticon from "../../assets/images/hearticon.svg";
import autprobanner from "../../assets/images/authprobannersm01.png";
import Titlebartags from "../../components/titlebarTags/Titlebartags";
const Collection = () => {
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
    <Titlebartags title='CryptoN : Collection '/>
      <section className="collection-page">
        <Container pt={12} maxW="1180px" className="collection-page-all">
          <Box className="banner-collection">
            <Box className="banner-img">
              <Image
                src={collectionimg}
                alt="bannerImg"
                className="web-verion-photo"
              />
              <Image
                src={autprobanner}
                alt="bannerImg"
                className="tab-version-photo"
              />
            </Box>
            <Box className="ban-bottom-img">
              <Image src={collectionbottomicon} alt="authorImage" />
            </Box>
            <Box className="collecton-profile-detail">
              <Box className="coll-social-icon">
                <UnorderedList className="icon-list-main">
                  <ListItem>
                    <Link href="#" className="icons-collection">
                      <Image src={activity} alt="icon" />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" className="icons-collection">
                      <Image src={discord} alt="icon" />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" className="icons-collection">
                      <Image src={insta} alt="icon" />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" className="icons-collection">
                      <Image src={twitter} alt="icon" />
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box className="collection-detail-main">
                <Box className="collection-detal-area">
                  <Heading as="h2" className="collection-heading">
                    Ringers by Dmitri Cherniak
                  </Heading>
                  <Heading as="h3" className="collection-date">
                    <span>Last Updated:</span> October 21st, 2021 at 3 AM
                  </Heading>
                </Box>
                <Text className="collection-para">
                  There are many variations of passages of Lorem Ipsum
                  available, but <br /> the majority have suffered alteration in
                  some form, by injected
                </Text>
                <Box className="coll-social-icon2">
                  <UnorderedList className="icon-list-main">
                    <ListItem>
                      <Link href="#" className="icons-collection">
                        <Image src={activity} alt="icon" />
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#" className="icons-collection">
                        <Image src={discord} alt="icon" />
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#" className="icons-collection">
                        <Image src={insta} alt="icon" />
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#" className="icons-collection">
                        <Image src={twitter} alt="icon" />
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>
            <Box className="collection-result">
              <UnorderedList>
                <ListItem className="list-result">
                  <span className="result-collection">Items</span>
                  <strong>10.0 K</strong>
                </ListItem>
                <ListItem className="list-result">
                  <span className="result-collection">Owners</span>
                  <strong>11.0 K</strong>
                </ListItem>
                <ListItem className="list-result">
                  <span className="result-collection">Floor Price</span>
                  <strong>
                    <Image src={priceicon} className="priceicon00" />
                    0,006
                  </strong>
                </ListItem>
                <ListItem className="list-result-last">
                  <span className="result-collection">Volume Traded</span>
                  <strong>
                    <Image src={priceicon} className="priceicon00" />
                    0,068
                  </strong>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>

          {/*collection first section ends here */}

          {/* collections second section start here */}

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
              <Box className="menu4">
                <Menu className="menu-wrap">
                  <MenuButton
                    className="button-tab"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Currency
                  </MenuButton>
                  <MenuList>
                    <MenuItem>USD</MenuItem>
                    <MenuItem>Ethereum</MenuItem>
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
          </Box>
        </Container>
      </section>
    </>
  );
};
export default Collection;
