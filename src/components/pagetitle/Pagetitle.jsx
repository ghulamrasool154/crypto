import React from "react";
import { Heading } from "@chakra-ui/react";
import "./pagetitle.css";
const Pagetitle = ({title}) => {
  return <h3 className="title--page-common">{title}</h3>;
};

export default Pagetitle;
