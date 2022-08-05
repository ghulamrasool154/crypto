import React, { useState } from "react";
import {
  Container,
  Box,
  Image,
  Input,
  Icon,
  Flex,
  VStack,
  Button,
  TagLabel,
  TagLeftIcon,
  Tag,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  GridItem,
  Link,
  Spacer,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { Search2Icon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import cryptonlogo from "../../assets/images/cryptonlogo.svg";
import "./header.css";
import wallet from "../../assets/images/walleticon.svg";
import user from "../../assets/images/usericon.svg";
import { NavLink } from "react-router-dom";
import searchicon from "../../assets/images/searchicon.svg";
import burgericon from "../../assets/images/burgericon.PNG";
import closemenuicon from "../../assets/images/closemenu.PNG";
import blueicon from "../../assets/images/bluedown.png";
const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenuSet = () => {
    setMenuToggle(!menuToggle);
  };
  const [moreMenuToggle, setMoreMenuToggle] = useState(false);
  const [mTest, setMenuText] = useState([
    {
      link: "create",
      text: "Create",
    },
    {
      link: "discover",
      text: " Discover",
    },
    {
      link: "itemstyle",
      text: " itemstyle",
    },
    {
      link: "collection ",
      text: " collection",
    },
    {
      link: "page/author-page",
      text: "author page",
    },
    {
      link: "page/authors",
      text: " authors",
    },
    {
      link: "page/faq",
      text: " Faq",
    },
    {
      link: "page/article",
      text: "articlestyle2",
    },
    {
      link: "page/blog",
      text: " blostyle",
    },
    {
      link: "page/discover2",
      text: "discover 2",
    },
  ]);
  return (
    <>
      <header className="header-section">
        <Container pt={5} pb={5} maxW="1180px" className="head-cont">
          <Flex className="header-rom" width="100%">
            <Box className="header-colum">
              <Box className="logo">
                <NavLink to="/">
                  <img src={cryptonlogo} alt="logo" />
                </NavLink>
              </Box>
              <Box className="searchform ">
                <form className="inpurarea">
                  <img src={searchicon} alt="" className="icon-input-header" />
                  <Input
                    placeholder="Search items,collection and creators"
                    type="text"
                  />
                </form>
              </Box>
              <Box className="nav-bar-custom">
                <ul>
                  <li>
                    <NavLink to="create" className="nav-custom-link">
                      Create
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="discover" className="nav-custom-link">
                      Discover 3
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="itemstyle" className="nav-custom-link">
                      itemstyle
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="collection" className="nav-custom-link">
                      collection
                    </NavLink>
                  </li>

                  <li className="more--pages--div ">
                    <span
                      className="nav-custom-link more--pages"
                      onClick={() => setMoreMenuToggle(!moreMenuToggle)}
                    >
                      pages <Image src={blueicon} />
                    </span>
                    {moreMenuToggle && (
                      <div className="authors--more--pagess ">
                        <ul>
                          <li>
                            <NavLink
                              to="page/author-page"
                              onClick={() => setMoreMenuToggle(!moreMenuToggle)}
                            >
                              {" "}
                              author page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="page/authors"
                              onClick={() => setMoreMenuToggle(!moreMenuToggle)}
                            >
                              {" "}
                              authors
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="page/faq"
                              onClick={() => setMoreMenuToggle(!moreMenuToggle)}
                            >
                              {" "}
                              Faq
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="page/discover2"
                              onClick={() => setMoreMenuToggle(!moreMenuToggle)}
                            >
                              {" "}
                              discover 2
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="page/article"
                              onClick={() => setMoreMenuToggle(!moreMenuToggle)}
                            >
                              {" "}
                              articlestyle2
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="page/blog"
                              onClick={() => setMoreMenuToggle(!moreMenuToggle)}
                            >
                              {" "}
                              blostyle
                            </NavLink>
                          </li>
                          
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </Box>
              <Box
                className="responsive-menu-setting-button"
                onClick={toggleMenuSet}
              >
                <Image src={menuToggle ? closemenuicon : burgericon}></Image>
              </Box>
              <Box className="loginWallet ">
                <a href="" className="user">
                  <Image src={user}></Image>
                </a>
                <a href="">
                  <Image src={wallet}></Image>
                </a>
              </Box>

              {menuToggle && (
                <Box className="responsive-menu-header">
                  <ul>
                    {mTest.map((element, index) => {
                    return  <li key={index}>
                        <NavLink
                          to={element.link}
                          className="nav-custom-link"
                          onClick={toggleMenuSet}
                        >
                          
                          {element.text}
                        </NavLink>
                      </li>;
                    })}

                   
                  </ul>
                </Box>
              )}
            </Box>
          </Flex>
        </Container>
      </header>
    </>
  );
};
export default Header;
