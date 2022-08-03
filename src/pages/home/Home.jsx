import React from "react";
import "./home.css";
import imgcircle1 from "../../assets/images/circlebg19.svg";
import imgcircle2 from "../../assets/images/circlebg20.svg";
import imgcircle3 from "../../assets/images/circlebg21.svg";
import { Container, Box, Image } from "@chakra-ui/react";
import Bannersec from "../../components/bannersec/Bannersec";
import Popularcollection from "../../components/popularcollection/Popularcollection";
import LastAdded from "../../components/LastAdded/LastAdded";
import LiveAuction from "../../components/LiveAuction/LiveAuction";
import Sellsnfts from "../../components/sellsnfts/Sellsnfts";
const Home = () => {
  return (
    <Box className="home">
      <Box className="circlebg1">
        <Image src={imgcircle1} />
      </Box>
      <Box className="circlebg2 ">
        <Image src={imgcircle2} className="centerimg" display={"initial"} />
      </Box>
      <Box className="circlebg3">
        <Image src={imgcircle3} />
      </Box>
      <Bannersec />
      <Popularcollection />
      <LastAdded/>
      <LiveAuction/>
      <Sellsnfts/>
    </Box>
  );
};

export default Home;
