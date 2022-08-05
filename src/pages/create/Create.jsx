import React, { useEffect, useState } from "react";
import "./create.css";
import {
  Container,
  Box,
  VStack,
  Flex,
  Heading,
  Text,
  Image,
  Input,
  Button,
  Stack,
  Switch,
  Select,
  Textarea,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import previewiamge from "../../assets/images/item-prev.png";
import priceicon from "../../assets/images/priceicon.svg";
import hearticon from "../../assets/images/hearticon.svg";
import { Link } from "react-router-dom";
import singleimg from "../../assets/images/single.svg";
import multiimg from "../../assets/images/multiple.svg";
import uploadimg from "../../assets/images/upload-icon.svg";
import Titlebartags from "../../components/titlebarTags/Titlebartags";

const Create = () => {
  const [file, setFile] = useState("");
  const [pic, setPic] = useState(false);
  const [name, setname] = useState("");

  const hanldesubmit = (event) => {
    event.preventDefault();
    console.log("testing..");
  };

  const _hanldeChnage = (e) => {
    const nameget = e.target.files[0].name;

    setname(nameget);

    setFile(e.target.files[0]);
    setPic(true);
  };

  useEffect(() => {
    var items = document.querySelectorAll("#collectiolist li");

    for (var i = 0; i < items.length; i++) {
      items[i].onclick = function () {
        document.getElementById("txt").value = this.innerHTML;
      };
    }
  });

  return (
    <>
    <Titlebartags title='CryptoN : Create'/>
    <Container maxW="1180px"  className="create-page">
      <Flex className="row">
        <Box className="colum-left">
          <Box className="" mb="20">
            <Heading>Create collectible item</Heading>
            <Text className="subitile">
              Meet the rules of NFT-art placement in
              <Link to="#"> our help center</Link>
            </Text>
          </Box>

          <form onSubmit={hanldesubmit}>
            <Flex className="chosenimage" justifyContent="space-between">
              <Box className="singleimg">
                <Image src={singleimg} alt="single" />
                <Text className="label"> Single Image</Text>
              </Box>
              <Box className="multiimg">
                <Image src={multiimg} alt="multi" />
                <Text className="label">Multiple Image</Text>
              </Box>
            </Flex>

            <Box className="uploadsection" mt="12">
              <Text className="label" mb="5">
                Upload
              </Text>
              <Box className="image-upload-wrap">
                <Input
                  placeholder="Basic usage"
                  type="file"
                  className="uploadinput"
                  onChange={(e) => _hanldeChnage(e)}
                />
                <Box className="drag-text" textAlign="center">
                  <Image src={uploadimg} alt="upload" m="auto" />
                </Box>
              </Box>
            </Box>
            {pic ? (
              <Box className="file-upload-content" mt="4">
                <Box className="title-wrapouter">
                  <Box className="uploaded-img">
                    <img
                      src={file ? URL.createObjectURL(file) : ""}
                      alt="image"
                    />
                  </Box>
                  <Box className="image-title-wrap">
                    <Text className="image-title" color={"white"}>
                      {name}
                    </Text>
                    <Button
                      className="remove-image"
                      onClick={() => setPic(false)}
                    >
                      remove{" "}
                    </Button>
                  </Box>
                </Box>
              </Box>
            ) : (
              ""
            )}

            <Flex className="pricing" mt="10" mb="4">
              <Box className="price">
                <Text className="label">Price</Text>
                <Input type="text" placeholder="Price"></Input>

                <Text className="label" mt="10">
                  Choose collection
                </Text>
                <Select
                  placeholder="New collection"
                  className="selectioncollection"
                >
                  <option value="Memes">Memes</option>
                  <option value="Photography">Photography</option>
                </Select>
              </Box>

              <Box className="Bids">
                <Text className="label">Open for Bids</Text>
                <Stack align="center" direction="row">
                  <Switch size="lg" />
                </Stack>
              </Box>
            </Flex>

            <Box className="choosecollection" mt="10" mb="4">
              <Text className="label"> Item Name</Text>
              <Input type="text" placeholder="Enter Name"></Input>
            </Box>

            <Box className="Description" mt="10">
              <Text className="label"> Description</Text>
              <Textarea placeholder="Enter the description " />
            </Box>

            <Flex className="pricing" mt="10" mb="4">
              <Box className="price">
                <Text className="label">Royalties</Text>
                <Input type="text" placeholder=" 0,10,20% or more"></Input>
              </Box>

              <Box className="Bids">
                <Text className="label">Unlock once purchased</Text>
                <Stack align="center" direction="row">
                  <Switch size="lg" />
                </Stack>
              </Box>
            </Flex>

            <Box className="createbutton" mt="10">
              <button type="submit" className="btn-create">
                Create
              </button>
            </Box>
          </form>
        </Box>

        <Box className="colum-right">
          <Heading>Preview of item</Heading>
          <Box className="aboutitem" borderRadius={"10px"} mt="24">
            <Box>
              <Image src={previewiamge} alt="img" />
            </Box>
            <Flex className="aboutitemcnt" p="5" justifyContent="space-between">
              <Box>
                <Text className="textgraycolor">Cryptosharks</Text>
                <Text className="textwhitecolor">Cryptosharks #92991</Text>
              </Box>
              <Box>
                <Text className="textgraycolor" textAlign={"end"}>
                  Price
                </Text>
                <Text className="textwhitecolor ">
                  <Image src={priceicon} alt="price" />
                  <strong>0, 006</strong>
                </Text>
                <Text className="textgraycolor " textAlign={"end"}>
                  <Image src={hearticon} alt="love" />
                  56
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
    </>
  );
};

export default Create;
