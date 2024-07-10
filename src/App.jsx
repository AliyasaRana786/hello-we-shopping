import Navbar from '../Components/Navbar'
import ProductPage from '../Components/ProductPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productdetailspage from '../Components/Productdetailspage';
import { useState } from 'react';
import { items } from '../Components/Data';
import SearchitemsPage from '../Components/SearchitemsPage';
import Cart from '../Components/Cart';
import Footer from '../Components/Footer';

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([])

  return (
    <Router>
      <Navbar cart={cart} setData={setData} />
      <Routes>

        <Route path='/' element={<ProductPage cart={cart} setCart={setCart} items={data} />} />
        <Route path='/product/:id' element={<Productdetailspage cart={cart} setCart={setCart} />} />
        <Route path='/search/:term' element={<SearchitemsPage />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
