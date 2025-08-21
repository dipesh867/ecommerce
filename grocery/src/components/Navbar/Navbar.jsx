import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled,setIsScrolled]=useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu)
    }
    
    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.scrollY>10)
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

    return (
        <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled? 'drop-shadow-[0_4px_15px_rgba(0,0,0,.4)]' : ''}`}>
            <nav className='max-w-[1400px] md:h-[14vh] mx-auto md:px-10 h-[12vh] px-7 flex items-center justify-between'>
                {/* this is logo */}
                <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cery</a>
                {/* desktop menu */}
                <ul className=' md:flex items-center gap-x-10 hidden'>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>about us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                </ul>
                {/* navbar actions  */}
                <div className='flex items-center gap-x-5'>

                    {/* search bar */}

                    <div className='md:flex p-1 justify-center items-center  border-2 border-orange-500 rounded-full hidden'>
                        <input type="text" name='text' id='text' placeholder='search...' autoComplete='off' className='flex-1 h-[4vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full'> <FaSearch /></button>
                    </div>

                    {/* heart icon */}
                    <a href="#" className='text-zinc-800 hover:text-orange-500 text-2xl'>
                        <FaHeart />
                    </a>

                    {/* shop icon */}
                    <a href="#" className='text-zinc-800 hover:text-orange-500 text-2xl'>
                        <RiShoppingBag4Fill />
                    </a>
                    {/* hamberger icon */}
                    <a href="#" className=' hover:text-orange-500 text-2xl md:hidden' onClick={toggleMenu}>
           
                        {showMenu?<TbMenu3/>:<TbMenu2 />}
                    </a>
                    
                </div>
                {/* mobile menu */}
                <ul className={` flex flex-col items-center bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 gap-y-10 md:hidden absolute top-30 -left-full transform -translate-x-1/2 duration-500 shadow-xl ${showMenu?"left-1/2":""}`}>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>about us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                     <li className={`flex p-1 justify-center items-center  border-2 border-orange-500 rounded-full md:hidden  `}>
                        <input type="text" name='text' id='text' placeholder='search...' autoComplete='off' className='flex-1 h-[4vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full'> <FaSearch /></button>
                    </li>
                </ul>

            </nav>

        </header>
    )
}

export default Navbar
