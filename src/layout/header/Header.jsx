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

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenuSet = () => {
    setMenuToggle(!menuToggle);
  };
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
                    <NavLink to="/" className="nav-custom-link">
                      Homepage
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="create" className="nav-custom-link">
                      Create
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="discover" className="nav-custom-link">
                      Discover
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="itemstyle" className="nav-custom-link">
                      itemstyle
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="collection" className="nav-custom-link">
                      collection
                    </NavLink>
                  </li>

                  <li>
                    {" "}
                    <NavLink to="authors-page" className="nav-custom-link">
                      Authors
                    </NavLink>
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
                    <li>
                      <NavLink to="/" className="nav-custom-link">
                        Homepage
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="create" className="nav-custom-link">
                        Create
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="discover" className="nav-custom-link">
                        Discover
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="itemstyle" className="nav-custom-link">
                        itemstyle
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="collection" className="nav-custom-link">
                        collection
                      </NavLink>
                    </li>

                    <li>
                      {" "}
                      <NavLink to="authors-page" className="nav-custom-link">
                        Authors-Page
                      </NavLink>
                    </li>
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
