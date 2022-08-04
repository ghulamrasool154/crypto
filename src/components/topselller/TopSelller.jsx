import React, { Component, useState } from "react";
import "./TopSeller.css";
import {
  Box,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Abs_TopSeller from "../../components/absTopSeller/Abs_TopSeller";
import topsellerimg from "../../assets/images/topsellerimg01.png";
import diaIcon from "../../assets/images/diamongicon.svg";
import sellerImg from "../../assets/images/sellerimg01.svg";
const TopSeller = () => {
  const [seller, setSeller] = useState([
    {
      id: "1",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
    {
      id: "2",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
    {
      id: "3",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
  ]);
  const [hours, setHours] = useState([
    {
      id: "1",
      sellerphoto: sellerImg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
    {
      id: "2",
      sellerphoto: sellerImg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
    {
      id: "3",
      sellerphoto: sellerImg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
  ]);
  const [week, setWeek] = useState([
    {
      id: "1",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
    {
      id: "2",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
    {
      id: "3",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
  ]);
  const [month, setMonth] = useState([
    {
      id: "1",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
    {
      id: "2",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
    {
      id: "3",
      sellerphoto: topsellerimg,
      Heading: "Metasaurs by Dr. DMT",
      diaImg: diaIcon,
      price: "+ 69,5%",
    },
  ]);

  return (
    <>
      <Box className="tops-sellers">
        <Heading as="h6" className="topseller-heading">
          Top Seller
        </Heading>
        <Tabs>
          <TabList className="seller-tablist">
            <Tab>All</Tab>
            <Tab>24 Hours</Tab>
            <Tab>Last Week</Tab>
            <Tab>last Month</Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="selling-tab-panel">
              {seller.map((e, idx) => (
                <Abs_TopSeller
                  key={idx}
                  sellerphoto={e.sellerphoto}
                  Heading={e.Heading}
                  diaImg={e.diaImg}
                  price={e.price}
                />
              ))}
            </TabPanel>
            <TabPanel className="selling-tab-panel">
              {hours.map((e, idx) => (
                <Abs_TopSeller
                  key={idx}
                  sellerphoto={e.sellerphoto}
                  Heading={e.Heading}
                  diaImg={e.diaImg}
                  price={e.price}
                />
              ))}
            </TabPanel>
            <TabPanel className="selling-tab-panel">
              {week.map((e, idx) => (
                <Abs_TopSeller
                  key={idx}
                  sellerphoto={e.sellerphoto}
                  Heading={e.Heading}
                  diaImg={e.diaImg}
                  price={e.price}
                />
              ))}
            </TabPanel>
            <TabPanel className="selling-tab-panel">
              {month.map((e, idx) => (
                <Abs_TopSeller
                  key={idx}
                  sellerphoto={e.sellerphoto}
                  Heading={e.Heading}
                  diaImg={e.diaImg}
                  price={e.price}
                />
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      
    </>
  );
};
export default TopSeller;
