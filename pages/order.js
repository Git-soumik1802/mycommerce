/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Order = ({ Cart, clearCart }) => {
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        calculateSubTotal();
    }, [Cart]);

    const calculateSubTotal = () => {
        let total = 0;
        for (const k in Cart) {
            total += Cart[k].price * Cart[k].qty;
        }
        setSubTotal(total);
    };

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">CODES WEAR</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID: #8911100</h1>

                            <p className="leading-relaxed mb-4">
                                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                                XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.
                            </p>

                            <div className="flex mb-4">
                                <a className="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1">item Description</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Total</a>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Wear The Code(XL/Black)</span>
                                <span className="ml-auto text-gray-900">1</span>
                                <span className="ml-auto text-gray-900">799</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Wear The Code(XL/Red)</span>
                                <span className="ml-auto text-gray-900">1</span>
                                <span className="ml-auto text-gray-900">899</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Wear The Code(XL/Green)</span>
                                <span className="ml-auto text-gray-900">1</span>
                                <span className="ml-auto text-gray-900">1299</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹{subTotal}</span>
                                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-200 object-cover object-center rounded"
                            src="https://m.media-amazon.com/images/I/61h6OQT4PPL._AC_UL480_FMwebp_QL65_.jpg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Order;
