import React from 'react'
import Grocery from '../../assets/aaa.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <section>
        <div className='max-w-[1400px] flex min-h-screen mx-auto md:px-10 px-7 md:flex-row flex-col items-center justify-center md:pt-25 pt-35'>
            {/* hero contnent */}
            <div className='flex-1' >
                <span className='bg-orange-100 text-orange-500 md:text-lg text-sm font-semibold px-4 py-2 rounded-full '>Export best quality...</span>
                <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-5'>Fresh Healthy <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br/> In your Town</h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>Discover the best organic produce sourced from local farms and enjoy the healthy meal.</p>
                
                <Link to='/shop' className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full font-semibold
               hover:bg-orange-600 text-lg hover:scale-105 transition-all duration-300 hover:to-orange-600 transition-all duration-300 cursor-pointer'>Shop Now</Link>
            </div>

            {/* images for hero section  */}
            <div className='flex-1'>
                <img src={Grocery} alt="Grocery" />
            </div>
        </div>
    </section>
  )
}

export default Hero
