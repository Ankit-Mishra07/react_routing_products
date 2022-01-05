import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/products/:id" element={<ProductDetail/>}></Route>
     </Routes>
    </>
  );
}

export default App;
