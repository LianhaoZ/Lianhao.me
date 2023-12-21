import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';
import { fadeIn, textVariant } from "../utils/motion";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
    
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
        <div className= "w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link 
            to = "/"
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0,0);
            }}
          >
            <img src = {logo} alt="logo" className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>Lian &nbsp; <span className='sm:block hidden'>| Zheng</span></p>
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((Link) => (
              <li 
                key = {Link.id}
                className={`${
                  active === Link.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img 
                  src = {toggle ? close: menu}
                  alt = "menu"
                  className='w-[28px] h-[28px] absolute top-10 right-5 z-[10] object-contain cursor-pointer'
                  onClick={() => setToggle(!toggle)}
                /> 
            <motion.div
              variants={fadeIn("right", "spring", 2, 1)}
            >
            {toggle && <div className='p-6 bg-black absolute top-0 right-0 h-screen w-[200px]'>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((Link) => (
                  <li 
                    key = {Link.id}
                    className={`${
                      active === Link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[24px] hover:brightness-150`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title)
                    }}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}
              </ul>   
            </div>}
            </motion.div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar