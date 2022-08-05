import React, { Component, useState } from "react";
import Abs_Tabs from "../../components/abstabs/Abs_Tabs";
import TopSeller from "../../components/topselller/TopSelller";
import Second_Abs_Table from "../../components/secondabstable/Second_Abs_Table";
import tableimg from "../../assets/images/tableimg.png";
import diaIcon from "../../assets/images/diamongicon.svg";

import "./ItemDetail.css";
import {
  Container,
  Flex,
  Box,
  Image,
  UnorderedList,
  ListItem,
  Link,
  Badge,
  Text,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Select,
  Tbody,
  Table,
  TableContainer,
} from "@chakra-ui/react";
import itemlargeImg from "../../assets/images/large-item-prev.png";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/Facebook_logo.svg";
import share from "../../assets/images/share-icon.svg";
import shareVector from "../../assets/images/share-Vector.svg";
import wishlist from "../../assets/images/wishlist.svg";
import createImg from "../../assets/images/tableimg.png";
import diaImag from "../../assets/images/diamongicon.svg";
import LastAdded from "../../components/LastAdded/LastAdded";
import Popularcollection from "../../components/popularcollection/Popularcollection";
import Titlebartags from "../../components/titlebarTags/Titlebartags";
const ItemDetail = () => {
  const [secondTable, setScondTable] = useState([
    {
      id: "1",
      mobimage: tableimg,
      diaIcon: diaIcon,
    },
    {
      id: "2",
      mobimage: tableimg,
      diaIcon: diaIcon,
    },
    {
      id: "3",
      mobimage: tableimg,
      diaIcon: diaIcon,
    },
    {
      id: "4",
      mobimage: tableimg,
      diaIcon: diaIcon,
    },
    {
      id: "5",
      mobimage: tableimg,
      diaIcon: diaIcon,
    },
    {
      id: "6",
      mobimage: tableimg,
      diaIcon: diaIcon,
    },
  ]);
  const [tabs, setTabs] = useState([
    {
      image: createImg,
      para: "Bid placed for 11.00 ETH 4 hours ago by",
      title: "@erikkk",
    },
    {
      image: createImg,
      para: "Bid placed for 11.00 ETH 4 hours ago by",
      title: "@erikkk",
    },
    {
      image: createImg,
      para: "Bid placed for 11.00 ETH 4 hours ago by",
      title: "@erikkk",
    },
    {
      image: createImg,
      para: "Bid placed for 11.00 ETH 4 hours ago by",
      title: "@erikkk",
    },
    {
      image: createImg,
      para: "Bid placed for 11.00 ETH 4 hours ago by",
      title: "@erikkk",
    },
  ]);
  const [bids, setBids] = useState([
    {
      image: createImg,
      para: "Bid placed for 11.00 ETH 4 hours ago by",
      title: "@erikkk",
    },
  ]);
  return (
    <>
    <Titlebartags title='CryptoN : Itemstyle '/>

      <section className="item-section">
        <Container maxW="1180px">
          <Flex className="row item-main-section">
            {/* top left  section  start here*/}

            <Box className="left-section">
              <Box className="Headings-md">
                <Heading as="h6" size="xs">
                  Ringers by Dmitri Cherniak
                </Heading>
              </Box>
              <Box className="inner-imter-section" mt={12}>
                <Box className="image-section_">
                  <Image src={itemlargeImg} alt="image" />
                </Box>
                <Box className="createncollection2">
                  <Box className="creator-section">
                    <Heading as="h6">Creator</Heading>
                    <Box className="create">
                      <Image src={createImg} />
                      <Link to="#">
                        {" "}
                        <p>@misha9292</p>
                      </Link>
                    </Box>
                  </Box>
                  <Box className="creator-section">
                    <Heading as="h6">Collection</Heading>
                    <Box className="collect">
                      <Image src={createImg} />
                      <Link to="#">
                        {" "}
                        <p>@Crazysharks</p>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box className="social-media-icon" pt={6} pb={6}>
                  <UnorderedList className="nested-list" m={0}>
                    <ListItem>
                      <Link to="#">
                        <Badge className="social-link tweet">
                          <Image src={twitter} alt="twitter" />
                          <span>Twitter</span>
                        </Badge>{" "}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="#">
                        <Badge className="social-link fb">
                          <Image src={facebook} alt="facebook" />
                          <span>facebook</span>
                        </Badge>{" "}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="#">
                        <Badge className="social-link share">
                          <Image src={share} alt="share" />
                          <span>share</span>
                        </Badge>{" "}
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="#">
                        <Badge className="social-link sharevector">
                          <Image src={shareVector} alt="shareVector" />
                          <span>Share</span>
                        </Badge>{" "}
                      </Link>
                    </ListItem>
                  </UnorderedList>
                  <Box className="wishlist">
                    <Image src={wishlist} alt="wishlist" />
                    <p>358</p>
                  </Box>
                </Box>
                <Box className="social-media-icon2" pt={6} pb={6}>
                  <UnorderedList className="nested-list" m={0}>
                    <ListItem>
                      <Link to="#">
                        <Box className="icon-twitter">
                          <Image src={twitter} />
                        </Box>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Box className="icon-facebook">
                        <Image src={facebook} />
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Link to="#">
                        <Box className="icon-share">
                          <Image src={share} />
                        </Box>
                      </Link>
                    </ListItem>
                  </UnorderedList>
                  <Box className="wishlist">
                    <Image src={wishlist} alt="wishlist" />
                    <p>358</p>
                  </Box>
                </Box>
                <Box className="createdby" pt={2.5}>
                  <Text>
                    {" "}
                    Created by{" "}
                    <strong>
                      <Link to="#">aaajj67</Link>
                    </strong>{" "}
                  </Text>
                  <Text className="discription">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Text>
                </Box>
              </Box>
            </Box>
            {/* top left section ends here */}

            {/* top right section start here */}

            <Box className="right-section">
              <Box className="">
                <Box className="Headings">
                  <Heading as="h6" size="xs">
                    Ringers by Dmitri Cherniak
                  </Heading>
                </Box>
                <Box className="createncollection">
                  <Box className="creator-section">
                    <Heading as="h6">Creator</Heading>
                    <Box className="create">
                      <Image src={createImg} />
                      <Link to="#">
                        {" "}
                        <p>@misha9292</p>
                      </Link>
                    </Box>
                  </Box>
                  <Box className="creator-section">
                    <Heading as="h6">Collection</Heading>
                    <Box className="collect">
                      <Image src={createImg} />
                      <Link to="#">
                        {" "}
                        <p>@Crazysharks</p>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box className="curPrice-Auction">
                  <Box className="nested-auction-section">
                    <Box className="current-price">
                      <Heading as="h6" className="curentPri">
                        Current Price
                      </Heading>
                      <Box className="pirceNumber">
                        <Image src={diaImag} />
                        <Text className="diaPrice">0,006</Text>
                      </Box>
                    </Box>
                    <Box className="current-price">
                      <Heading as="h6" className="curentPri">
                        Auction ends in
                      </Heading>
                      <Box className="pirceNumber">
                        <Text className="time">26 days 11:06</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="btn-section">
                    <Button size="lg" className="buy">
                      Buy Now
                    </Button>
                    <Button size="lg" className="bid">
                      Price a Bid
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box className="tabs-section">
                <Tabs>
                  <TabList className="tab-title">
                    <Tab className="history">History</Tab>
                    <Tab className="bidss">Bids</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel className="list-section">
                      {tabs.map((e, idx) => (
                        <Box key={idx}>
                          <Abs_Tabs
                            key={idx}
                            image={e.image}
                            para={e.para}
                            title={e.title}
                          />
                        </Box>
                      ))}
                    </TabPanel>
                    <TabPanel>
                      {bids.map((e, idx) => (
                        <Box key={idx}>
                          <Abs_Tabs
                            image={e.image}
                            para={e.para}
                            title={e.title}
                          />
                        </Box>
                      ))}
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
            {/* top right section end here */}

            {/*last items section code pasted here  */}

            {/*last items section code ends  here  */}

            {/* popular collection code start here */}

            {/* popular collection code ends here */}
          </Flex>
          <Box className="SmbuttonNMAuctionPrice">
            <Box className="nested-auction-section-sm">
              <Box className="current-price forborder">
                <Heading as="h6" className="curentPri">
                  Current Price
                </Heading>
                <Box className="pirceNumber">
                  <Image src={diaImag} />
                  <Text className="diaPrice">0,006</Text>
                </Box>
              </Box>
              <Box className="current-price">
                <Heading as="h6" className="curentPri">
                  Auction ends in
                </Heading>
                <Box className="pirceNumber">
                  <Text className="time">26 days 11:06</Text>
                </Box>
              </Box>
            </Box>
            <Text className="discription1" p={0}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
            <Box className="btn-section2">
              <Button size="lg" className="buy">
                Buy Now
              </Button>
              <Button size="lg" className="bid">
                Price a Bid
              </Button>
            </Box>
          </Box>

          <Box className="nested-auction-section-md">
            <Box className="current-price">
              <Heading as="h6" className="curentPri">
                Current Price
              </Heading>
              <Box className="pirceNumber">
                <Image src={diaImag} />
                <Text className="diaPrice">0,006</Text>
              </Box>
            </Box>
            <Box className="current-price">
              <Heading as="h6" className="curentPri">
                Auction ends in
              </Heading>
              <Box className="pirceNumber">
                <Text className="time">26 days 11:06</Text>
              </Box>
            </Box>
          </Box>
          <Flex className="row btnNTAbsSection">
            <Box className="btn-section1">
              <Button size="lg" className="buy">
                Buy Now
              </Button>
              <Button size="lg" className="bid">
                Price a Bid
              </Button>
            </Box>
            <Box className="tabs-section-2">
              <Tabs>
                <TabList className="tab-title">
                  <Tab className="history">History</Tab>
                  <Tab className="bidss">Bids</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel className="list-section">
                    {tabs.map((e, idx) => (
                      <Box key={idx}>
                        <Abs_Tabs
                       
                          image={e.image}
                          para={e.para}
                          title={e.title}
                        />
                      </Box>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {bids.map((e, idx) => (
                      <Box  key={idx}>
                        <Abs_Tabs
                         
                          image={e.image}
                          para={e.para}
                          title={e.title}
                        />
                      </Box>
                    ))}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Flex>
          <LastAdded />
          <Popularcollection />
          <Box className="tab-section-item">
            <TopSeller />
            <Box className="mobile-section-item">
              <Box>
                <Text className="top-seller">Top Seller</Text>
                <Box className="select-box">
                  <Select
                    color="white"
                    placeholder="Last 7 days"
                    className="select"
                  >
                    <option value="option1">All </option>
                    <option value="option2">24 Hours</option>
                    <option value="option3">Last Week</option>
                    <option value="option3">Last Month</option>
                  </Select>
                </Box>
              </Box>
              <Box className="second-abs-table">
                <TableContainer>
                  <Table variant="simple">
                    <Tbody>
                      {secondTable.map((e, idx) => (
                        <Second_Abs_Table
                          key={idx}
                          mobimage={e.mobimage}
                          diaIcon={e.diaIcon}
                        />
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
                <Button className="buton" colorScheme="cyan">
                  Go to ranking
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};
export default ItemDetail;
