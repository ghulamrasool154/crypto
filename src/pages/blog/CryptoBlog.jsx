import React, { useState } from "react";
import "./CryptoBlog.css";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import postimage1 from "../../assets/images/post-img1.png";
import AbsBlogCard from "../../components/AbsBlogCard/AbsBlogCard";
const CryptoBlog = () => {
  const [card, setCard] = useState([
    {
      image: postimage1,
      title: "Spotlight",
      date: "October 10 , 2021",
      heading: "Trending NFTs: Steph Curry, Creature World, and more",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      image: postimage1,
      title: "Saftey",
      date: "October 10 , 2021",
      heading: "Trending NFTs: Steph Curry, Creature World, and more",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      image: postimage1,
      title: "Guide",
      date: "October 10 , 2021",
      heading: "Trending NFTs: Steph Curry, Creature World, and more",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      image: postimage1,
      title: "Spotlight",
      date: "October 10 , 2021",
      heading: "Trending NFTs: Steph Curry, Creature World, and more",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      image: postimage1,
      title: "Trending",
      date: "October 10 , 2021",
      heading: "Trending NFTs: Steph Curry, Creature World, and more",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      image: postimage1,
      title: "Spotlight",
      date: "October 10 , 2021",
      heading: "Trending NFTs: Steph Curry, Creature World, and more",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ]);
  return (
    <>
      <section className="cryptoblog">
        <Container maxW="1180px" className="blogs-page">
          <Box className="blogHeadingNdisp">
            <Heading as="h3">
              <span>Crypto</span>Blog
            </Heading>
            <Text className="blogdispcrition">
              Lorem Ipsum is simply dummy text of the
              <span> printing and typesetting industry.</span>
            </Text>
          </Box>
          <Box className="blog-tabs">
            <Flex className="blog-tabs-inner">
              <Box className="left-blog-tab">
                <Menu className="blog-menuss">
                  <MenuButton className="blog-menu">
                    Newest <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Price</MenuItem>
                    <MenuItem>Highest Price</MenuItem>
                    <MenuItem>Lowest Price</MenuItem>
                  </MenuList>
                </Menu>
                <Menu className="blog-menuss">
                  <MenuButton className="blog-menu">
                    All Categories <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Price</MenuItem>
                    <MenuItem>Highest Price</MenuItem>
                    <MenuItem>Lowest Price</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box className="right-blog-tab">
                <Button className="buttons-blog">Art</Button>
                <Button className="buttons-blog">Photography</Button>
                <Button className="buttons-blog  clear-blog-btn">
                  Clear All <i className="fa-solid fa-xmark"></i>
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box className="blogss">
            {card.map((e, idx) => (
              <AbsBlogCard
                image={e.image}
                title={e.title}
                date={e.date}
                heading={e.heading}
                para={e.para}
              />
            ))}
          </Box>
        </Container>
      </section>
    </>
  );
};
export default CryptoBlog;
