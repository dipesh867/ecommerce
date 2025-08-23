import React from 'react'

//swiper for sliding 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Heading from '../Heading/Heading'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";


import Pinky from "../../assets/pinky.jpg";
import Jhoncena from "../../assets/cena.jpg";
import Rizwan from "../../assets/Rizwan.jpg";
import Siraz from "../../assets/siraz.jpg";
import Bobzie from "../../assets/bobzie.jpg";

const Testimonials = () => {

  return (
    <section>
      <div className='max-w-[1440px] mx-auto md:px-10 px-7 mx-auto py-20'>
        <Heading highlight='Customers' heading='Saying' />
        <div className='flex justify-end gap-x-3'>
          <button className='text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 to-orange-500 hover:text-white cursor-pointer custom-prev '>
            <MdKeyboardArrowLeft />
          </button>
          <button className='text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 to-orange-500 hover:text-white cursor-pointer custom-next'>
            <MdKeyboardArrowRight />
          </button>
        </div >
        <Swiper navigation={{
          nextEl:".custom-next",
          prevEl:".custom-prev"

        }}
        loop={true}
        breakpoints={{
          640:{slidesPerView:1 ,spaceBetween:20},
          768:{slidesPerView:2 ,spaceBetween:20},
          1024:{slidesPerView:3 ,spaceBetween:20}
        }}
         modules={[Navigation]} className="mySwiper mt-5">
        
          {review.map(item => {
            return(
              <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
              <div className='flex gap-5 items-center '>
                <div className='h-16 w-16 rounded-full bg-red-500 outline-2 outline-red-500 outline-offset-4 overflow-hidden'>
                  <img  src={item.image} alt={item.name}  className='w-full h-full '/>
                </div>
                <div>
                  <h5 className='text-xl font-bold'>{item.name}</h5>
                  <p className='text-zinc-600'>{item.profession}</p>
                  <span className='flex text-yellow-400 mt-3 text-xl gap'>
                    {Array.from({length:item.rating},(_,index)=>(
                       <FaStar />
          ))}
                  </span>
                  
                </div>
              </div>

              <div className=' mt-10 min-h-[15vh]'>
                <p className='text-zinc-500'>{item.para}</p>
              </div>
            </SwiperSlide>
            )
          })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: 'Prabesh Pinky',
    profession: 'Berojgar',
    rating: 3,
    para: 'K xa kta ho khabar. Snachei xau ni. paraaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    image: Pinky
  },
  {
    id: 2,
    name: 'jhon cena ',
    profession: 'WWE Wresteler',
    rating: 4,
    para: 'You cant see me.You cant see me.You cant see me.You cant see me.',
    image: Jhoncena
  },
  {
    id: 3,
    name: 'Babar Azam',
    profession: 'Zimbabar',
    rating: 1,
    para: 'haam zi me hun king ka king .sapne tute he hazar ling ling ling ',
    image: Bobzie
  },
  {
    id: 4,
    name: 'Mohamad Rizwan',
    profession: 'Actor',
    rating: 1,
    para: 'Definetely ya to win he ya to loose he.Definetely ya to win he ya to loose he.',
    image: Rizwan
  },
  {
    id: 5,
    name: 'Mohamad Siraz',
    profession: 'DSP',
    rating: 5,
    para: 'I am only belive in Jassi bhai because game changer player is only one guy',
    image: Siraz
  },
]