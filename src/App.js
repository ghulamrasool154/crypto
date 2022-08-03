import './App.css';
import Create from './pages/create/Create';
import Footer from './layout/footer/Footer';
import { Routes, Route } from 'react-router-dom'
import Header from './layout/header/Header';
import Discover3 from './pages/discover/Discover3'
import Home from './pages/home/Home';
import ItemDetail from './pages/itemdetail/ItemDetail';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='create' element={<Create />}> </Route>
        <Route path='discover' element={<Discover3 />}> </Route>
        <Route path='page' element={<h2 className='page-title'>Page</h2>}> </Route>
        <Route path='activity' element={<h2 className='page-title'>activity</h2>}> </Route>
        <Route path='itemstyle' element={<h2 className='page-title'>Item Style</h2>}> </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
