import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
    const [cart, setCart] = useState({});
    const [subTotal, setSubTotal] = useState(0);

    const addToCart = (itemCode: string, qty: any, price: any, name: any, size: any, variant: any) => {
        const updatedCart = { ...cart };

        if (itemCode in updatedCart) {
            updatedCart[itemCode].qty += qty;
        } else {
            updatedCart[itemCode] = {

                qty: number,
                price: number,
                name: string,
                size: string,
                variant: string,

            };
        }

        let newSubTotal = 0;
        Object.values(updatedCart).forEach(item => {
            newSubTotal += item.qty * item.price;
        });

        setCart(updatedCart);
        setSubTotal(newSubTotal);
    }

    const removeFromCart = (itemCode: string) => {
        const updatedCart = { ...cart };
        if (itemCode in updatedCart) {
            delete updatedCart[itemCode];
        }

        let newSubTotal = 0;
        Object.values(updatedCart).forEach(item => {
            newSubTotal += item.qty * item.price;
        });

        setCart(updatedCart);
        setSubTotal(newSubTotal);
    };

    const clearCart = () => {
        setCart({});
        setSubTotal(0);
    };

    return (
        <>
            <Navbar Cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
            <Component Cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
