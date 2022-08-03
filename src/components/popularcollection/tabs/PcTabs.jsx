import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import "./PcTabs.css";
import blueicon from "../../../assets/images/bluedown.png";
import PopularSlider from "../../SlickSlider/PopularSlider";
import ApiList from "../../../apidata/ApiList";
const PcTabs = () => {
  const [menu, setmenu] = useState(false);
  const menushow = () => {
    // console.log("11");
    setmenu(!menu);
  };

  return (
    <>
      <Tabs className="tabsss">
        <TabList>
          <Tab className="tabbutton">All categories</Tab>
          <Tab className="tabbutton">Digital</Tab>
          <Tab className="tabbutton">Photography</Tab>
          <Tab className="tabbutton">Memes</Tab>

          <Box className="more-tab" onClick={menushow}>
            Choose category{" "}
            <span className="blueicon">
              {" "}
              <Image src={blueicon} />
            </span>
            {menu && (
              <Box className="nav-tabs-more">
                <Link to="#" className="nav-link-more">
                  Digital
                </Link>
                <Link to="#" className="nav-link-more">
                  Photography
                </Link>
                <Link to="#" className="nav-link-more">
                  Memes
                </Link>
                <Link to="#" className="nav-link-more">
                  All categories
                </Link>
                <Link to="#" className="nav-link-more">
                  Memes
                </Link>
                <Link to="#" className="nav-link-more">
                  Photography
                </Link>
                <Link to="#" className="nav-link-more">
                  Digital
                </Link>
                <Link to="#" className="nav-link-more">
                  News
                </Link>
                <Link to="#" className="nav-link-more">
                  Music
                </Link>
                <Link to="#" className="nav-link-more">
                  Domain names
                </Link>
                <Link to="#" className="nav-link-more">
                  Virtual worlds
                </Link>
                <Link to="#" className="nav-link-more">
                  Trading cards
                </Link>
                <Link to="#" className="nav-link-more">
                  Sports
                </Link>
                <Link to="#" className="nav-link-more">
                  Utility
                </Link>
              </Box>
            )}
          </Box>
        </TabList>

        <TabPanels className="-custom-tabgs">
          <TabPanel>
            <PopularSlider />
          </TabPanel>

          <TabPanel>
            <PopularSlider />
          </TabPanel>

          <TabPanel>
            <PopularSlider />
          </TabPanel>

          <TabPanel>
            <PopularSlider />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PcTabs;
