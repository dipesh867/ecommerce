import React from 'react'
import Button from '../Button/Button'
import DiscountImage from '../../assets/litchi.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 md:mt-30 mt-20 bg-right bg-contain bg-no-repeat  ' style={{backgroundImage:`url(${DiscountImage})` }}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col py-10 max-w-[1400px] mx-auto md:px-10 px-7'>
            <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit cd:self-center md:mt-15'>20%</span>
            <div className='max-w-[700px]'>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold mb-2'>First Order Discount!</h3>
                <p className='text-zinc-600 my-6'>Enjoy 20% off your first order in our grocery website with fast delivery of fresh items.</p>
                <Button content='Get Discount'/>
            </div>
        </div>
    </section>
  )

}

export default Discount
