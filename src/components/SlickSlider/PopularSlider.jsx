import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopularSlider.css";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import img from "../../assets/images/popularcolicon01.png";
import img2 from "../../assets/images/popularcolimg03.png";
import checion from "../../assets/images/checkicon.svg";

import previous from "../../assets/images/slidera-l-row.svg";

import next from "../../assets/images/slidera-r-row.svg";
import ApiList from "../../apidata/ApiList";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
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
    <div>
      <Slider {...settings}>
        {ApiList.map((element, index) => {
          return (
            <Box className="creators" key={index}>
              <Box className="creatorImg">
                <Image src={img2} alt="image" />
              </Box>
              <Box className="creatorIcon">
                <Image src={img} alt="image" />
                <Box className="creatorcheck">
                  <Image src={checion} alt="image" />
                </Box>
              </Box>
              <Box className="creatorsText text-center">
                <Heading className="textwhitecolor">{element.title}</Heading>
                <Heading className="textbluecolor">{element.author}</Heading>
                <Text className="textgraycolor">{element.disc}</Text>
              </Box>
            </Box>
          );
        })}

       
      </Slider>
    </div>
  );
};

export default SimpleSlider;
