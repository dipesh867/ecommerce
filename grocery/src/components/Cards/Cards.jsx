import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa6'
import Button from '../Button/Button'

const Cards = (props) => {
    return (
        <div className='bg-zinc-100 p-5'>
            {/* card icons */}
            <div className='flex justify-between'>
                <span className='text-3xl text-zinc-300 '>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-3 py-3 rounded-lg cursor-pointer'>
                    <FaPlus />
                </button>
            </div>
            {/* card image */}
            <div className='w-full h-40'>
                <img src={props.image} alt={props.title} className='w-full h-full object-contain' />
            </div>
            {/* card content */}
            <div className='text-center'>
                <h3 className='text-2xl font-semibold '>{props.title}</h3>
                <p className='text-2xl font-bold mt-4 mb-3'>Rs {props.price.toFixed(2)}</p>
                <Button content='Shop Now' />
            </div>
        </div>
    )
}

export default Cards
