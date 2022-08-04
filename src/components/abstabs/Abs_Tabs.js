import React, { Component } from 'react';
import './Abs_Tabs.css';
import { TabPanel, Box, Image, Text, Link } from '@chakra-ui/react';
const Abs_Tabs = (props) => {
    const { image, para, title } = props;
    return (

        <>

            <Box className="Abs-tabs" >
                <Box className="tab-image">
                    <Image src={image} />
                    <Box className='paraName'>
                        <Text className="para">
                            {para}
                        </Text>
                        <Link to="#">   <Text className="title">{title}</Text></Link>
                    </Box>
                </Box>
            </Box>

        </>

    )

}
export default Abs_Tabs