import React, { useState } from "react";
import "./Faq.css";
import {
  Container,
  Flex,
  Box,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Pagetitle from "../../components/pagetitle/Pagetitle";
import faqbgimg from "../../assets/images/circlebg21.svg";
import Titlebartags from "../../components/titlebarTags/Titlebartags";
const Faq = () => {
  const [faqTabs, setFaqTabs] = useState([{}, {}, {}, {}, {}, {}, {}]);
  return (
    <>
    <Titlebartags title='CryptoN : FAQ'/>
      <Container maxW="1180px" className="faq--page">
        <Box className="faq--bg--img">
          <Image src={faqbgimg} />
        </Box>
        <Flex className="faq--title">
          <Box width="100%">
            <Pagetitle title="Buying" />
          </Box>
        </Flex>

        <Flex className="faq--page--row">
          <Box width="100%">
            <Tabs className="faq--tabss--wrapper">
              <Box className="faq--page--tabs--menu">
                <TabList className="faq--tabs--menu-vertical">
                  {faqTabs.map((element, index) => {
                    return (
                      <li key={index}>
                        <Tab>How do I add funds using MoonPay?</Tab>
                      </li>
                    );
                  })}
                </TabList>
              </Box>

              <Box className="faq--page--tabs--discription">
                <TabPanels>
                  {faqTabs.map((element, index) => {
                    return (
                      <TabPanel
                        className="discription-body animate__animated animate__fadeIn"
                        key={index}
                      >
                        <Heading className="discription--title">
                          Lorem Ipsum - is simply dummy?
                        </Heading>

                        <Text className="discription--text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset.
                        </Text>
                        <Heading className="discription--title">
                          Lorem Ipsum - is simply dummy?
                        </Heading>
                      </TabPanel>
                    );
                  })}
                </TabPanels>
              </Box>
            </Tabs>
          </Box>
        </Flex>
        <Flex className="faq--page--accodion">
          <Box width="100%">
            <Accordion allowToggle>
              {faqTabs.map((element, index) => {
                return (
                  <AccordionItem key={index} className="custom--accodion--item">
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        How do I add funds using MoonPay?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4} className="accodion--disc--body">
                      <Heading className="accodition--title"> heading </Heading>
                      <Text className="accodition--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Faq;
