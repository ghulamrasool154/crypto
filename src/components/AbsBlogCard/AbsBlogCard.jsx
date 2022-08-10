import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
const AbsBlogCard = (props) => {
  const { image, title, date, heading, para } = props;
  return (
    <>
      <Box className="blog-card">
        <Image src={image} />
        <Box className="cards-content-section">
          <Box className="date-cards">
            <Link href="#" className="blog-title">
              {" "}
              {title}
            </Link>
            <Link href="#" className="blog-date">
              {" "}
              {date}
            </Link>
          </Box>
          <Heading as="h4" className="blog-card-heading">
            {heading}
          </Heading>
          <Text className="card-blog-para">{para}</Text>
        </Box>
      </Box>
    </>
  );
};
export default AbsBlogCard;
