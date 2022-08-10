import { Routes, Route } from "react-router-dom";
import Create from "../pages/create/Create";
import Discover3 from "../pages/discover/Discover3";
import Home from "../pages/home/Home";
import ItemDetail from "../pages/itemdetail/ItemDetail";
import AuthorsPage from "../pages/authorspage/AuthorsPage";
import Collection from "../pages/collection/Collection";
import Faq from "../pages/faq/Faq";
import Discover2 from "../pages/discover2/Discover2";
import Authors from "../pages/authors/Authors";
import Articlepage from "../pages/article/Articlepage";
import CryptoBlog from "../pages/blog/CryptoBlog";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="discover" element={<Discover3 />} />
      <Route path="itemstyle" element={<ItemDetail />} />
      <Route path="collection" element={<Collection />} />
      <Route path="page/author-page" element={<AuthorsPage />} />
      <Route path="page/discover2" element={<Discover2 />} />
      <Route path="page/authors" element={<Authors />} />
      <Route path="page/faq" element={<Faq />} />
      <Route path="page/article" element={<Articlepage />} />
      <Route path="page/blog" element={<CryptoBlog/>} />
    </Routes>
  );
};

export default Routing;
