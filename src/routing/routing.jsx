import React from "react";

import Create from "../pages/create/Create";
import { Routes, Route } from "react-router-dom";
import Discover3 from "../pages/discover/Discover3";
import Home from "../pages/home/Home";
import ItemDetail from "../pages/itemdetail/ItemDetail";
import AuthorsPage from "../pages/authorspage/AuthorsPage";
import Collection from "../pages/collection/Collection";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="discover" element={<Discover3 />} />
      <Route path="authors-page" element={<AuthorsPage />} />
      <Route path="collection" element={<Collection />} />
      <Route path="itemstyle" element={<ItemDetail />} />
    </Routes>
  );
};

export default Routing;
