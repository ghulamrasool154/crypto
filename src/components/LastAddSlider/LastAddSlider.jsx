import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LastAddSlider.css";
import previewiamge from "../../assets/images/item-prev.png";
import priceicon from "../../assets/images/priceicon.svg";
import hearticon from "../../assets/images/hearticon.svg";
import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";
import ApiList from "../../apidata/ApiList";
const LastAddSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="lastslider">
      <Slider {...settings}>
        {ApiList.map((element, index) => {
          return (
            <Box className="aboutitem" key={index} borderRadius={"10px"}>
              <Box className="img-section-top">
                <Image src={previewiamge} alt="img" />
              </Box>
              <Flex className="aboutitemcnt" justifyContent="space-between">
                <Box className="leftside">
                  <Text className="textgraycolor">Cryptosharks</Text>
                  <Text className="textwhitecolor">Cryptosharks #92991</Text>
                </Box>
                <Box>
                  <Text className="textgraycolor " textAlign={"end"}>
                    Price
                  </Text>
                  <Text className="textwhitecolor heart">
                    <Image src={priceicon} alt="price" />
                    <strong>0 006</strong>
                  </Text>
                  <Text className="textgraycolor " textAlign={"end"}>
                    <Image src={hearticon} alt="love" />
                    56
                  </Text>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default LastAddSlider;
