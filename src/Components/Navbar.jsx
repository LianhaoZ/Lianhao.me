import { useCallback, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { logo } from '../../public/assets';
import { Icon } from '@iconify/react';

import { fadeIn, textVariant } from "../utils/motion";
import { navLinks } from '../constants/Data';
import { motion } from "framer-motion";
 

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [Dark, setDark] = useState(false);

    return (
        <>
            <header className='text-gray-700 dark:text-gray-200'>
                <Link
                    to='/'
                    className='w-8 h-8 fixed lt-lg:absolute m-6 select-none outline-none'
                >
                    <img className="cursor-pointer w-8 h-8" src={logo} />
                </Link>

                <nav className='w-full items-center py-5 fixed top-0 z-20 p-8 grid grid-cols-auto max-content box-border '>

                    <div className='w-full flex justify-between items-center max-w-7xl m-auto'>

                        <ul className='grid gap-3 auto-cols-auto ml-auto max-w-screen-xl'>
                            {navLinks.map((Link) => (
                                <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none active:opacity-100 hover:opacity-100">
                                    <li
                                        key={Link.id}
                                        className={`${active === Link.title
                                            ? "text-white"
                                            : "text-secondary"
                                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                                        onClick={() => setActive(Link.title)}
                                    >
                                        {Link.id === "resume" ? <a href="https://drive.google.com/drive/u/2/folders/10CbZTl5wmdVYZzaEfKFyVvM6PKCyblMV">Résumé</a> : <a href={`${Link.id}`}>{Link.title}</a>}

                                    </li>
                                </div>
                            ))}
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none active:opacity-100 hover:opacity-100">
                                <a href="https://github.com/LianhaoZ"> <i alt="github" className={`w-6 h-6 cursor-pointer icon-[ri--github-line]`} /> </a>
                            </div>
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none active:opacity-100 hover:opacity-100">
                                <a href="https://www.linkedin.com/in/lianhao-zheng-a56030207/">
                                    <i alt="linkedin" className={`w-6 h-6 cursor-pointer icon-[ri--linkedin-box-line]`} />
                                </a>
                            </div>
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none active:opacity-100 hover:opacity-100">

                                <label className="swap swap-rotate cursor-pointer">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" className="theme-controller" value="synthwave" />
                                    {/* sun icon */}
                                    <i className="swap-on w-6 h-6 icon-[ri--sun-line]" />
                                    {/* moon icon */}
                                    <i className="swap-off w-6 h-6 icon-[ri--moon-line]" />
                                </label>
                                
                                {/* <label className="cursor-pointer grid place-items-center">
                                    <input onClick={() => setDark(!Dark)} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" /> */}
                                    {/* <i className="col-start-2 row-start-1 stroke-base-100 fill-base-100 icon-[ri--sun-line]" />
                                <i className="col-start-1 row-start-1 stroke-base-100 fill-base-100 icon-[ri--moon-line]" /> */}
                                    {/* <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                </label> */}

                            </div>

                        </ul>


                        {/* small devices */}

                        <div className='sm:hidden flex flex-1 justify-end items-center'>
                            <i
                                alt="menu"
                                className={`${toggle ? 'icon-[ri--close-fill]' : 'icon-[ri--menu-3-fill]'} w-[28px] h-[28px] items-center absolute top-5 right-5 z-[10] object-contain cursor-pointer`}
                                onClick={() => setToggle(!toggle)}
                            />
                            <motion.div
                                variants={fadeIn("right", "spring", 2, 1)}
                            >
                                {toggle && <div className='p-6 bg-black absolute top-0 right-0 h-screen w-[200px]'>
                                    <ul className='list-none flex justify-end items-start flex-col gap-4'>
                                        {navLinks.map((Link) => (
                                            <li
                                                key={Link.id}
                                                className={`${active === Link.title
                                                    ? "text-white"
                                                    : "text-secondary"
                                                    } font-poppins font-medium cursor-pointer text-[24px] hover:brightness-150`}
                                                onClick={() => {
                                                    setToggle(!toggle);
                                                    setActive(Link.title)
                                                }}
                                            >
                                                <a href={`${Link.id}`}>{Link.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>}
                            </motion.div>
                        </div>

                    </div>
                </nav>

            </header>
        </>
    )
}

export default Navbar;