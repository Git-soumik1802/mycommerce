import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
const Navbar = ({ Cart, addToCart, removeFromCart, clearCart, subTotal }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-md sticky top-0 bg-white z-10'>

            <div className='logo mx-5'>
                <Link href={'/'}>
                    <Image src="/logo.jpeg" alt="Logo" width={200} height={40}></Image>
                </Link>
            </div>

            <div className="nav">
                <ul className='flex items-center space-x-6 font-bold md:text-md'>
                    <Link href={'/Tshirts'}>
                        <li>Tshirts</li>
                    </Link>
                    <Link href={'/Hoodies'}>
                        <li>Hoodies</li>
                    </Link>
                    <Link href={'/Mugs'}>
                        <li>Mugs</li>
                    </Link>
                    <Link href={'/Stickers'}>
                        <li>Stickers</li>
                    </Link>
                </ul>
            </div>

            <div className="flex  cursor-pointer cart absolute right-0 top-4 mx-5 font-bold">
                <Link href={'/login'}><  MdAccountCircle className=' text-xl   md:text-2xl gap-x-1 pt-1 ' /></Link>
                <AiOutlineShoppingCart onClick={toggleCart} className='text-xl    md:text-2xl   gap-x-1  pt-1 ' />

            </div>
            {isCartOpen && (
                <div className="w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 p-10 px-8 py-10 transform transition-transform ${Object.keys(Cart)}  translate-x-0">
                    <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
                    <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle /></span>


                    <ol className="list-decimal font-semibold " >
                        {Object.keys(Cart).length == 0 && < div className='my-4 text-base font-semibold'> Your Cart is Empty! </div>}
                        {Object.keys(Cart).map((k) => {
                            return <li key={k}>
                                <div className="item flex  my-5">
                                    <div className='w-4/5 font-semibold '>{Cart[k].name}</div>
                                    <div className='flex font-semibold items-center text-lg'>
                                        <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, Cart[k].price, Cart[k].nam, Cart[k].size, Cart[k].variant) }} className='text-pink-500' />
                                        <span className='mx-2'>{Cart[k].qty}</span>
                                        <AiFillPlusCircle onClick={() => { addToCart(k, 1, Cart[k].price, Cart[k].nam, Cart[k].size, Cart[k].variant) }} className='text-pink-500' />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ol>


                    <div className="flex">
                        <Link href={'/checkout'}>  <button className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-700 rounded-text-sm"><BsFillBagCheckFill className='m-0.5' />Checkout</button></Link>
                        <button onClick={clearCart} className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-700 rounded-text-sm"><BsFillBagCheckFill className='m-0.5' />ClearCart</button>
                    </div>
                    <div className="total   my-20">Subtotal:₹{subTotal}</div>
                </div>
            )}
        </div>
    )
}

export default Navbar
