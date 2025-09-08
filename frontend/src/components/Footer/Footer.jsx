import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
  return (
  <footer className='bg-zinc-100 py-20'>
    <div className=' flex flex-wrap gap-y-12 max-w-[1440px] mx-auto md:px-10 px-7'>
        <div className='flex-1 basis-[300px]'>
            <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500'>O</span>cery</a>
       
        <p className="text-zinc-600 mt-6 max-w-[400px]">
          Enjoy wide range of healthy, organic and locally sourced groceries to  maintain a healthy lifestyle.
        </p>
        <p className='text-zinc-800 mt-6'>
      2025 &copy; All Rights Reserved
    </p>
    </div>

    <ul className='flex-1'>
      <li>
        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
      </li>
      <li className='mt-6'><a href="#" className='hover:text-orange-500'>About Us</a></li>
      <li className='mt-6'><a href="#" className='hover:text-orange-500'>FAQ's</a></li>
    </ul>

    <ul className='flex-1'>
      <li>
        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
      </li>
      <li className='mt-6'><a href="#" className='hover:text-orange-500'>Support Center</a></li>
      <li className='mt-6'><a href="#" className='hover:text-orange-500'>Feedback</a></li>
    </ul>

    <div className='flex-1'>
      <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
      <p className='mt-6 text-zinc-600'>
        Any Queries? <br /> We'd love to hear from you.
      </p>

      <div className=' flex p-1 rounded-lg mt-6 bg-white '>
        <input type="email" name='email' id='email' autoComplete='off' placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none ' />
        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-lg text-2xl hover:to-orange-600 cursor-pointer px-2 '><FaArrowRight/></button>
      </div>
    </div>

  </div>
    

  </footer>
  )
}

export default Footer
