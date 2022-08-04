import React, { Component } from 'react';
import './Abs_TopSeller.css';
import { Box, Image, Text, Flex } from '@chakra-ui/react'
const Abs_TopSeller = (props) => {
    const { id, sellerphoto, Heading, diaImg, price } = props;
    return (

        <>
            {/* <Box className="seller-main-section"> */}
            <Flex className='selling-section' >

                <Box className='top-one-sec'>
                    <Box className="sel-item">
                        <Text className='sel-id'>{id}</Text>
                        <Image src={sellerphoto} alt="iamge" className='sel-iamge' />
                        <Box className='icon-image-seller'>
                            <Text className='sel-head'>{Heading}</Text>
                            <Box className='selling-icon'>
                                <Image src={diaImg} alt="icon" /><span>8921.77</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='pirce-seller'>{price}</Box>
                </Box>


                <Box className='top-two-sec'>
                    <Box className="sel-item">
                        <Text className='sel-id'>{id}</Text>
                        <Image src={sellerphoto} alt="iamge" className='sel-iamge' />
                        <Box className='icon-image-seller'>
                            <Text className='sel-head'>{Heading}</Text>
                            <Box className='selling-icon'>
                                <Image src={diaImg} alt="icon" /><span>8921.77</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='pirce-seller'>{price}</Box>
                </Box>
                <Box className='top-three-sec'>
                    <Box className="sel-item">
                        <Text className='sel-id'>{id}</Text>
                        <Image src={sellerphoto} alt="iamge" className='sel-iamge' />
                        <Box className='icon-image-seller'>
                            <Text className='sel-head'>{Heading}</Text>
                            <Box className='selling-icon'>
                                <Image src={diaImg} alt="icon" /><span>8921.77</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='pirce-seller'>{price}</Box>
                </Box>
            </Flex>
            <Flex className='selling-section-1200'>

                <Box className='top-one-sec'>
                    <Box className="sel-item">
                        <Text className='sel-id'>{id}</Text>
                        <Image src={sellerphoto} alt="iamge" className='sel-iamge' />
                        <Box className='icon-image-seller'>
                            <Text className='sel-head'>{Heading}</Text>
                            <Box className='selling-icon'>
                                <Image src={diaImg} alt="icon" /><span>8921.77</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='pirce-seller'>{price}</Box>
                </Box>


                <Box className='top-two-sec'>
                    <Box className="sel-item">
                        <Text className='sel-id'>{id}</Text>
                        <Image src={sellerphoto} alt="iamge" className='sel-iamge' />
                        <Box className='icon-image-seller'>
                            <Text className='sel-head'>{Heading}</Text>
                            <Box className='selling-icon'>
                                <Image src={diaImg} alt="icon" /><span>8921.77</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='pirce-seller'>{price}</Box>
                </Box>

            </Flex>
            {/* </Box> */}
        </>


    )



}
export default Abs_TopSeller