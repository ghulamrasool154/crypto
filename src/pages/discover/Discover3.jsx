import React, { useState } from "react";
import Abs_Table from "../../components/abstable/Abs_Table";
import banner from "../../assets/images/discoverbannerimg01.png";
import tableimg from "../../assets/images/collectionimg01.png";
import diaIcon from "../../assets/images/priceicon.svg";
import Second_Abs_Table from "../../components/secondtable/Second_Abs_Table";

import {
  Container,
  Box,
  Image,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Discover3.css";
import Titlebartags from "../../components/titlebarTags/Titlebartags";
const Discover3 = () => {
  const [table, setTable] = useState([
    {
      id: 1,
      photo: tableimg,
      heading: "Jungle Freaks by Trosley",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
    {
      id: 2,
      photo: tableimg,
      heading: "Edifice by Ben Kovach #999",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
    {
      id: 3,
      photo: tableimg,
      heading: "Playboy Rabbitars Official",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
    {
      id: 4,
      photo: tableimg,
      heading: "Ape Harmony Monster Club",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
    {
      id: 5,
      photo: tableimg,
      heading: "Jungle Freaks by Trosley",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
    {
      id: 6,
      photo: tableimg,
      heading: "Non-Fungible Fungi Mint Pass",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
    {
      id: 7,
      photo: tableimg,
      heading: "Golden Token Incomplete Control",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
    {
      id: 8,
      photo: tableimg,
      heading: "MatrixWorld LandVoucher ",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },

    {
      id: 9,
      photo: tableimg,
      heading: "Letters by Vinnie Hager",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
    {
      id: 10,
      photo: tableimg,
      heading: "Redemption Tokens for Brendan",
      diaIcon: diaIcon,
      vol: "9684,2",
      hours: "-24,5%",
      days: "+920%",
      diaIcon: diaIcon,
      price: "3,36",
      owner: "1,8K",
      assest: "3,4K",
    },
  ]);
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
  return (
    <>
    <Titlebartags title='CryptoN : Discover '/>
      <section className="discover3">
        <Container maxW="1180px">
          <Box className="web-section">
            <Box pb={12}>
              <Image src={banner} alt="banner img" />
            </Box>
            <Box pb={12} className="menu-items">
              <Flex>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="selectlist">
                    Last 24 Hours
                  </MenuButton>
                  <MenuList>
                    <MenuItem>last 7 Days</MenuItem>
                    <MenuItem>last 30 days</MenuItem>
                    <MenuItem>All the time</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="selectlist">
                    All Catergories
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Memes</MenuItem>
                    <MenuItem>Photography</MenuItem>
                    <MenuItem>Digital</MenuItem>
                    <MenuItem>News</MenuItem>
                    <MenuItem>Music</MenuItem>
                    <MenuItem>Domain names</MenuItem>
                    <MenuItem>trading card</MenuItem>
                    <MenuItem>Utility</MenuItem>
                    <MenuItem>Sports</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="selectlist">
                    All Chains
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Ethereum</MenuItem>
                    <MenuItem>Polygon</MenuItem>
                    <MenuItem>Klaytn</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
            <Box>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th className="headss-1">COLLECTION</Th>
                      <Th className="headss">VOLUME</Th>
                      <Th className="headss">24 HOURS %</Th>
                      <Th className="headss">7 DAYS %</Th>
                      <Th className="headss">FLOOR PRICE</Th>
                      <Th className="headss">OWNERS</Th>
                      <Th className="headss">ASSETS</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {table.map((e, idx) => (
                      <Abs_Table
                        key={idx}
                        id={e.id}
                        photo={e.photo}
                        heading={e.heading}
                        diaIcon={e.diaIcon}
                        vol={e.vol}
                        hours={e.hours}
                        days={e.days}
                        price={e.price}
                        owner={e.owner}
                        assest={e.assest}
                      />
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Box className="mobile-section">
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
                        id={e.id}
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
        </Container>
      </section>
    </>
  );
};
export default Discover3;
