import { useCallback, useState } from "react";
import { Link, NavLink } from 'react-router-dom'; 

import { fadeIn, textVariant } from "../utils/motion";
// import { navLinks } from '../constants/Data';
import { motion } from "framer-motion";
import StarsCanvas from "./Stars"; 

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <>

            <StarsCanvas />
            <header>
                <Link
                    to='/'
                    className='w-8 h-8 fixed m-6'
                >
                    <img className="cursor-pointer w-10 h-10" src='/assets/logo.svg' />
                </Link>
                <nav>
                    <div className="flex justify-between p-8 w-full max-content box-border">
                        <div>{/*spacer */}</div>

                        <ul className='flex gap-3 justify-evenly space-x-4 max-w-screen-xl'> 
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none hover:opacity-100">
                                <NavLink className="text-gray-200" to="/projects"  
                                >Projects</NavLink>  
                            </div>
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none hover:opacity-100">
                                <NavLink  className="text-gray-200" to="/blog" 
                                >Blog</NavLink>  
                            </div>

                            {/* <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none hover:opacity-100">
                                <a className="text-gray-200" href="research">Research</a>  
                            </div> */}
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none hover:opacity-100">
                                <a className="text-gray-200" href="https://drive.google.com/drive/u/2/folders/10CbZTl5wmdVYZzaEfKFyVvM6PKCyblMV">Résumé</a>  
                            </div> 
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none hover:opacity-100">
                                <a href="https://github.com/LianhaoZ"> <i alt="github" className={`text-gray-200 w-6 h-6 cursor-pointer icon-[ri--github-line]`} /> </a>
                            </div>
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none hover:opacity-100">
                                <a href="https://www.linkedin.com/in/lianhao-zheng-a56030207/">
                                    <i alt="linkedin" className={`text-gray-200 w-6 h-6 cursor-pointer icon-[ri--linkedin-box-line]`} />
                                </a>
                            </div>
                            <div className="cursor-pointer text-decoration-none text-inherit transition-opacity duration-200 opacity-60 outline-none hover:opacity-100">

                                <label className="swap swap-rotate cursor-pointer">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" className="theme-controller" value="synthwave" />
                                    {/* sun icon */}
                                    {/* <i className="swap-on w-6 h-6 icon-[ri--sun-line]" /> */}
                                    {/* <i className="swap-on w-6 h-6 icon-[ri--star-s-line]" /> */}
                                    <i className="swap-on w-6 h-6 icon-[ri--flashlight-line]" /> 
                                    {/* moon icon */}
                                    <i className="swap-off w-6 h-6 icon-[ri--moon-line]" />
                                </label> 
                            </div>
                        </ul>


                        {/* small devices ->> need to fix*/}

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
                                                    : "text-gray-200"
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