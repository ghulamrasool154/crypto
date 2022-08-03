import React from "react";
import "./footer.css";
import {
  Container,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import footerlogo from "../../assets/images/footlogo.svg";
import twiter from "../../assets/images/twitter.svg";
import discortbutton from "../../assets/images/discordbutton.svg";
import inst from "../../assets/images/insta.svg";
import red from "../../assets/images/reditbutton.svg";
import youtube from "../../assets/images/youtube.svg";
import emai from "../../assets/images/emailbutton.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <Container maxW="1180px" className="footer">
        <Flex justifyContent="space-between" className="row">
          <Box className="logosection">
            <Box className="footlogocntSec">
              <Image src={footerlogo} alt='logo' width={'130px'} className='logoimg' />

              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </Box>
            <Box className="joincommunity">
              <Heading className="titlefooter">Join the Community</Heading>

              <UnorderedList className="list">
                <ListItem>
                  <Link to="#">
                    <Image src={discortbutton} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="#">
                    <Image src={twiter} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="#">
                    <Image src={inst} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="#">
                    <Image src={red} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="#">
                    <Image src={youtube} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="#">
                    <Image src={emai} />
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Flex
            className="footerrightsidewrapper"
            justifyContent="space-between"
          >
            <Box className="myaccount">
              <Heading className="titlefooter">My account</Heading>
              <UnorderedList>
                <ListItem>
                  <Link to="#">Profile</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Favorites</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">My collection</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Settings</Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box className="discover">
              <Heading className="titlefooter">Discover</Heading>
              <UnorderedList>
                <ListItem>
                  <Link to="#">Art</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Phorography</Link>
                </ListItem>

                <ListItem>
                  <Link to="#">Domain Names</Link>
                </ListItem>

                <ListItem>
                  <Link to="#">Memes</Link>
                </ListItem>

                <ListItem>
                  <Link to="#">Virtual Worlds</Link>
                </ListItem>

                <ListItem>
                  <Link to="#">Trading Cards</Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box className="informcenter">
              <Heading className="titlefooter">Inform Center</Heading>
              <UnorderedList>
                <ListItem>
                  <Link to="#">About Us</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">FAQ</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Blog</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Contact</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Newsletter</Link>
                </ListItem>
                <ListItem>
                  <Link to="#">Privacy Policy</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
