import { Container, Flex, Box, Image, Text, Heading } from "@chakra-ui/react";
import "./Articlepage.css";
import Titlebartags from "../../components/titlebarTags/Titlebartags";
import Pagetitle from "../../components/pagetitle/Pagetitle";
import articlebannerimg from "../../assets/images/article-mainimg.png";
import { Link } from "react-router-dom";
import twittericon from "../../assets/images/twittericon.svg";
import facebookicon from "../../assets/images/facebookicon.svg";
import vk from "../../assets/images/vk.svg";
import article from "../../assets/images/article-img1.png";
import Slider from "react-slick";
import { useState } from "react";
const Articlepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
        },
      },
    ],
  };
  const [similarPost, setSimilarPost] = useState([
    { category: "spotlight" },
    { category: "trending " },
    { category: "safety" },
    { category: "guide" },
    { category: "trending" },
    { category: "guide" },
  ]);
  return (
    <>
      <Titlebartags title='CryptoN : Article '/>
      <Container maxW="1180px" className="article--page">
        <Flex className="article--wrapper">
          <Box className="colum" width="100%">
            <Pagetitle title="The beginner’s guide to creating & selling digital art NFTs" />
            <Image
              src={articlebannerimg}
              alt="Image banner"
              className="article--image"
            />
            <Box className="article--detail">
              <Box className="article--tagbox">
                <Box className="article--tagbox--category">
                  <Link to="#">Photography</Link>
                </Box>
                <Box className="article--tagbox--date">
                  <Link to="#">October 10 , 2021</Link>
                </Box>
              </Box>
              <Box className="article--disc">
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </Box>
              <Box className="article--social--contact">
                <Link to="#" className="social--twitter">
                  <Image src={twittericon} />
                  <span>tweet</span>
                </Link>
                <Link to="#" className="social--fb">
                  <Image src={facebookicon} />
                  <span>share</span>
                </Link>
                <Link to="#" className="social--vk">
                  <Image src={vk} />
                  <span>share</span>
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Flex className="slimilar--title--section">
          <Box width="100%">
            <Pagetitle title="Similar articles" />
          </Box>
        </Flex>

        <Flex className="disktop--">
          <Box className="similar--article--wrapper ">
            <>
              <Slider {...settings}>
                {similarPost.map((element, index) => {
                  return (
                    <Box className="similar--article--post" key={index}>
                      <Box className="post--wrap">
                        <Box className="post--img">
                          <Image src={article} />
                        </Box>
                        <Box className="post--detail">
                          <Box className="post--tagbox">
                            <Box className="post--tagbox--category">
                              <Link to="#" className={element.category}>{element.category}</Link>
                            </Box>
                            <Box className="post--tagbox--date">
                              <Link to="#">October 10 , 2021</Link>
                            </Box>
                          </Box>
                          <Heading className="post--title">
                            Edition365: A portrait of the year that changed
                            everything
                          </Heading>
                          <Text className="post--disc">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Slider>
            </>
          </Box>
        </Flex>
        <Flex className="responsive--similar--post">
          <Box className="similar--article--wrapper">
            {similarPost.slice(0, 4).map((element, index) => {
              return (
                <Box className="similar--article--post" key={index}>
                  <Box className="post--wrap">
                    <Box className="post--img">
                      <Image src={article} />
                    </Box>
                    <Box className="post--detail">
                      <Box className="post--tagbox">
                        <Box className="post--tagbox--category">
                          <Link to="#" className={element.category}>{element.category}</Link>
                        </Box>
                        <Box className="post--tagbox--date">
                          <Link to="#">October 10 , 2021</Link>
                        </Box>
                      </Box>
                      <Heading className="post--title">
                        Edition365: A portrait of the year that changed
                        everything
                      </Heading>
                      <Text className="post--disc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                      </Text>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Articlepage;
