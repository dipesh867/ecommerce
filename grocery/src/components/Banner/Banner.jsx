import React from 'react'

const Banner = (props) => {
    return (
        <div className='bg-zinc-400 h-[50vh] mt-25 flex justify-center relative items-center bg-cover bg-center'
        style={{backgroundImage:`url(${props.image})`}}>
            <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>{props.title}</h2>
            <div className='bg-black/60 absolute inset-0'></div>
        </div>
    )
}

export default Banner
