/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import React from 'react'

const Checkout = ({ Cart, clearCart }) => {
    const [subTotal, setSubTotal] = useState(0);
    const [deliveryDetails, setDeliveryDetails] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        city: '',
        state: '',
        pincode: '',
    });

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

    const handleDeliveryDetailsChange = (e) => {
        const { name, value } = e.target;
        setDeliveryDetails({
            ...deliveryDetails,
            [name]: value,
        });
    };

    return (
        <div className='container m-auto'>
            <h1 className='font-bold text-3xl my-8 text-center'>
                Checkout
            </h1>

            <h2 className='font-bold text-xl'>
                1. Delivery Details
            </h2>

            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <label htmlFor="name">
                        <div class=" mb-4">
                            <label for="Name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="Name" name="Name" class="w-full bg-white rounded border border-gray-300
                             focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none
                              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </label>
                </div>
                <div className="px-2 w-1/2">
                    <label htmlFor="name">
                        <div class=" mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border
                             border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3
                              leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </label>
                </div>
            </div>
            <div className="px-2 w-full font-semibold">
                <label htmlFor="name">
                    <div class=" mb-4">
                        <label for="Address" class="leading-7 text-sm text-gray-600">
                            Address
                        </label>

                        <textarea name="Address" id="Address" class="w-full bg-white rounded border
                             border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none
                              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        </textarea>

                    </div>
                </label>
            </div>
            <div className='ax-auto flex my-2'>
                <div className="px-2 w-1/2">
                    <label htmlFor="name">
                        <div class=" mb-4">
                            <label for="Name" class="leading-7 text-sm text-gray-600">Phone</label>
                            <input type="text" id="Phone" name="Phone" class="w-full bg-white rounded border border-gray-300
                             focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none
                              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </label>
                </div>
                <div className="px-2 w-1/2">
                    <label htmlFor="name">
                        <div class=" mb-4">
                            <label for="Phone" class="leading-7 text-sm text-gray-600">City</label>
                            <input type="text" id="City" name="City" class="w-full bg-white rounded border
                             border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3
                              leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                    </label>
                </div>
            </div>
            <div className='ax-auto flex my-4'>
                <div className="px-2 w-1/2">
                    <label htmlFor="name">
                        <div class=" mb-4">
                            <label for="Name" class="leading-7 text-sm text-gray-600">State</label>
                            <input type="text" id="State" name="State" class="w-full bg-white rounded border border-gray-300
                             focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none
                              text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </label>
                </div>
                <div className="px-2 w-1/2">
                    <label htmlFor="name">
                        <div class=" mb-4">
                            <label for="Phone" class="leading-7 text-sm text-gray-600">Pincode</label>
                            <input type="Phone" id="Pincode" name="Pincode" class="w-full bg-white rounded border
                             border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3
                              leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                    </label>
                </div>
            </div>




            <h2 className="font-semibold text-xl">2. Review Cart Items & Pay</h2>

            <div className="w-full sideCart absolute bg-pink-100 p-2 px-4 py-2">
                <ol className="list-decimal font-semibold">
                    {Object.keys(Cart).length === 0 && (
                        <div className="my-3 text-base font-semibold">
                            Your Cart is Empty!
                        </div>
                    )}
                    {Object.keys(Cart).map((k) => {
                        return (
                            <li key={k}>
                                <div className="item flex pd-1 my-2">
                                    <div className=" w-1/3 font-semibold">{Cart[k].name}</div>
                                    <div className="flex font-semibold items-center right-5 text-lg">
                                        <AiFillMinusCircle
                                            onClick={() =>
                                                removeFromCart(
                                                    k,
                                                    1,
                                                    Cart[k].price,
                                                    Cart[k].name,
                                                    Cart[k].size,
                                                    Cart[k].variant
                                                )
                                            }
                                            className="text-pink-500"
                                        />
                                        <span className="mx-2">{Cart[k].qty}</span>
                                        <AiFillPlusCircle
                                            onClick={() =>
                                                addToCart(
                                                    k,
                                                    1,
                                                    Cart[k].price,
                                                    Cart[k].name,
                                                    Cart[k].size,
                                                    Cart[k].variant
                                                )
                                            }
                                            className="text-pink-500"
                                        />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
                <div className="text-canter">
                    <span className="total right-10">Subtotal:₹{subTotal}</span>
                </div>
                <Link href={'/checkout'}>
                    <button className="  flex mx-2 text-white bg-pink-500 border-0 py-2 px-2  focus:outline-none
                       hover:bg-pink-700 text-right  rounded-text-sm"><BsFillBagCheckFill className='m-0.5' />
                        Pay₹{subTotal}
                    </button></Link>
            </div>
        </div>
    );
};

export default Checkout;