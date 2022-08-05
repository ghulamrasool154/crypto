import React, { useState } from "react";
import "./AuthorsPage.css";
import {
  Container,
  Flex,
  Box,
  Image,
  Select,
  Text,
  Button,
} from "@chakra-ui/react";
import Pagetitle from "../../components/pagetitle/Pagetitle";
import authoreitemimg from "../../assets/images/authoreitemimg01.png";
import imgicon from "../../assets/images/authoreicon06.png";
import icon from "../../assets/images/priceicon.svg";
import discoverbluebrightbg from "../../assets/images/discoverbluebrightbg.svg";
import rankinghighlight from "../../assets/images/rankinglightbg.svg";
import Popupmodel from "../../components/popupmodel/Popupmodel";
import Titlebartags from "../../components/titlebarTags/Titlebartags";
const AuthorsPage = () => {
  const [authors, setAuthors] = useState([
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

  const [modelShow, setModelShow] = useState(false);

  const toggleModel = () => {
    setModelShow(!modelShow);
  };
  return (
    <>
    <Titlebartags title='CryptoN : Author Page '/>
      <Box className="author-page-disbluebritbg">
        <Image src={discoverbluebrightbg}></Image>
      </Box>
      <Container className="authors--page" maxW="1180px">
        <Flex className="row--authors--page--title">
          <Box width="100%">
            <Pagetitle title="Authors" />
          </Box>
        </Flex>
        <Flex className="row--authors--page--buttonn">
          <Box className="authors--days">
            <Select>
              <option value="Last 7 days"> Last 7 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="All the time">All the time</option>
            </Select>
          </Box>
          <Box className="authors--category">
            <Select placeholder="All categories">
              <option>Memes</option>
              <option>Photography</option>
              <option>Digital</option>
              <option>News</option>
              <option>Music</option>
              <option>Domain names</option>
              <option>Virtual worlds</option>
              <option>Trading cards</option>
              <option>Sports</option>
              <option>Utility</option>
            </Select>
          </Box>
          <Box className="authors--chain">
            <Select placeholder=" All chains">
              <option value="Ethereum">Ethereum</option>
              <option value="Polygon">Polygon</option>
              <option value="Klaytn">Klaytn</option>
            </Select>
          </Box>
        </Flex>
        <Flex className="row--authors--page--data">
          <Box className="wrapper--authors--box">
            {authors.map((element, index) => {
              return (
                <Box className="authors--box" key={index}>
                  <Box className="authors--image">
                    <Image src={authoreitemimg}></Image>
                  </Box>
                  <Box className="authors--icon">
                    <Image src={imgicon}></Image>
                  </Box>
                  <Box className="authors--disc">
                    <Text className="authors--title">KingCrypto</Text>
                    <Text className="authors--subtitle">@cryptopank223</Text>
                    <Box className="authors--authorEarn">
                      <Box className="authors--earn">
                        <Text className="earn--title">Earned</Text>
                        <Text className="earn--value">
                          <Image src={icon}></Image>
                          <strong className="value--earn"> 1 771,63</strong>
                        </Text>
                      </Box>
                      <Box className="authors--essets">
                        <Text className="assest--title">Assets</Text>
                        <Text className="assest--value">1,4 K</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Flex>
        <Flex className="row--authors--popup">
          <Button className="authors--filter--button" onClick={toggleModel}>
            {" "}
            Filter
          </Button>
          {modelShow && <Popupmodel toggleModel={toggleModel} />}
        </Flex>
      </Container>

      <Box className="author-page-rankinglightbg">
        <Image src={rankinghighlight}></Image>
      </Box>
    </>
  );
};

export default AuthorsPage;
