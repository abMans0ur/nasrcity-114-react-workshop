import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [bigMenu, setBigMenu] = useState(false);
    useEffect(() => {
        const windowHandler = () => {
            let windowSize = window.innerWidth;
            windowSize <= 700 ? setMenu(true) : setMenu(false);
        }
        windowHandler();
        window.addEventListener('resize', windowHandler)
    }, [])
    const menuHandler = () => {
        setBigMenu(!bigMenu);
    }
    const productsCounter =useSelector(state=>state.cart.items)?.length
    return (
        <header>
            <nav>
                <span>LOGO</span>
                <ul style={menu ? { display: 'none' } : undefined} className={bigMenu ? "bigMenu" : ""} >
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/cart' ><IoCart size={22} /> {productsCounter}</NavLink></li>
                </ul>
                {
                    bigMenu ?
                        <IoMdClose size={30} fill='white' onClick={menuHandler} /> :
                        menu && <FaBars size={30} fill='white' onClick={menuHandler} />
                }
            </nav>
        </header>
    )
}

export default Navbar
