import React, { useState } from "react";
import "./Authors.css";
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
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import collectionimg from "../../assets/images/authoprofilebannerimg.png";
import collectionbottomicon from "../../assets/images/authorproicon01.png";
import activity2 from "../../assets/images/activityicon.svg";
import discord from "../../assets/images/discordbutton.svg";
import insta from "../../assets/images/insta.svg";
import twitter from "../../assets/images/twitter.svg";
import authorImg from "../../assets/images/authoreitemimg01.png";
import priceicon from "../../assets/images/priceicon.svg";
import hearticon from "../../assets/images/hearticon.svg";
import autprobanner from "../../assets/images/authprobannersm01.png";
import handicon from "../../assets/images/handicon.svg";
import activityicon from "../../assets/images/activityItem01.svg";
import diaIcon from "../../assets/images/priceicon.svg";
import Titlebartags from "../../components/titlebarTags/Titlebartags";
const Authors = () => {
  const [itemSection, setItemSection] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [activity, setActivity] = useState([{}, {}]);
  const [activitymobile, setActivtyMobile] = useState([{}, {}]);

  return (
    <>
    <Titlebartags title='CryptoN : Authors '/>
      <section className="authors-page">
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
                      <Image src={activity2} alt="icon" />
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
          </Box>

          {/*authors first section ends here */}

          {/* authors second section start here */}

          {/* tabs section starts hers  */}
          <Tabs className="custom--tabs--">
            <TabList className="authos-tablistsss">
              <Tab>
                <i className="fa-solid fa-album-circle-plus"></i>Collected 5
              </Tab>
              <Tab>
                {" "}
                <i className="fa-solid fa-paintbrush"></i> Created 0
              </Tab>
              <Tab>
                {" "}
                <i className="fa-solid fa-heart"></i>Favourite
              </Tab>
              <Tab>
                <i className="fa-solid fa-clock"></i>Activity
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel className="aurthor-tabpanel">
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
              </TabPanel>
              <TabPanel className="aurthor-tabpanel">
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
              </TabPanel>
              <TabPanel className="aurthor-tabpanel">
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
              </TabPanel>
              <TabPanel className="aurthor-tabpanel">
                <TableContainer className="aurthor-web-table">
                  <Table className="activity-table-panel">
                    <Thead>
                      <Tr>
                        <Th>Event Type</Th>
                        <Th>Item</Th>
                        <Th>Price</Th>
                        <Th>Quantity</Th>
                        <Th>From</Th>
                        <Th>To</Th>
                        <Th>Time</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {activity.map((e, idx) => {
                        return (
                          <Tr>
                            <Td>
                              <Box className="handiconText">
                                <Image src={handicon} alt="icon" />
                                <span>Offer</span>
                              </Box>
                            </Td>
                            <Td>
                              <Box className="imageText">
                                <Image src={activityicon} alt="activity icon" />
                                <Box className="image-right-section">
                                  <Text className="imgTextOne">
                                    Jungle Freaks
                                  </Text>
                                  <Text className="imgTextTwo">
                                    Jungle Freaks by Trosley
                                  </Text>
                                </Box>
                              </Box>
                            </Td>
                            <Td>
                              <Box className="diamondiconText">
                                <Image src={diaIcon} alt="diamond icon" />
                                0,002
                              </Box>
                            </Td>
                            <Td className="qty">1</Td>
                            <Td className="from">alphabet</Td>
                            <Td className="to">barbos2021</Td>
                            <Td className="timess">20 seconds ago</Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
                <Box className="responsive-activty-section">
                  {activitymobile.map((e, idx) => {
                    return (
                      <Box className="aurthor-mobile-acitivy-list">
                        <Box className="aurthor-list-mobile">
                          <Image src={activityicon} />
                          <Box className="activty-right-section">
                            <Text className="imgTextOne">Jungle Freaks</Text>
                            <Text className="imgTextTwo">
                              Jungle Freaks by Trosley
                            </Text>
                            <Box className="diamondiconText">
                              <Image src={diaIcon} alt="diamond icon" />
                              0,002
                            </Box>
                          </Box>
                        </Box>
                        <Box className="aruthor-offer-right-mobile">
                          <Box className="handiconText">
                            <Image src={handicon} alt="icon" />
                            <span>Offer</span>
                          </Box>
                          <Box className="timess">20 seconds ago</Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* tabs ends starts hers  */}
        </Container>
      </section>
    </>
  );
};
export default Authors;
