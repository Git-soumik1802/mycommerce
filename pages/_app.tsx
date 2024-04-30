import { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let myCart = { ...cart };
    if (itemCode in myCart) {
      myCart[itemCode].qty += qty;
    }
    else {
      myCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(myCart);
    saveCart(myCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }

  const removeFromCart = (itemCode) => {
    let myCart = { ...cart };
    if (itemCode in myCart) {
      myCart[itemCode].qty -= 1;
      if (myCart[itemCode].qty <= 0) {
        delete myCart[itemCode];
      }
    }
    setCart(myCart);
    saveCart(myCart);
  }

  return (
    <>
      <Navbar Cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Component Cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}  {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
