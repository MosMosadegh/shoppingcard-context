import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import products from "./Components/Data/products";
import Toast from "./Components/Toasts/Toast";
import Card from "./Components/Cart/Cart";
import productsContext from "./Components/Contexts/ProductsContext";

import "./App.css";

function App() {
  const [allProduct, setAllProduct] = useState(products);
  const [userCart, setUserCart] = useState([])
  const [isShowToast,setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  
  return (
    <div>
      <productsContext.Provider value={{
        allProduct,
        userCart,
        setUserCart,
        isShowToast, 
        setIsShowToast,
        isShowCart,
        setIsShowCart,
      }}>
        <Navbar />
        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title">All Products</h1>
              <ProductsSection/>
          </div>
        </main>
        <Toast />
        <Card />
      </productsContext.Provider>
    </div>
  );
}

export default App;
