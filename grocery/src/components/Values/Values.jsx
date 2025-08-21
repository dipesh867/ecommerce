import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { MdSafetyCheck } from "react-icons/md";
import { GiChestnutLeaf } from "react-icons/gi";
import Valueimage from '../../assets/values.png';


const Values = () => {

    const Leftvalues=value.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex flex-row-reverse flex-1 gap-6 items-center '>
                <div>
                    <span className=' flex justify-center items-center bg-gradient-to-l from-orange-300 to-orange-500 w-15 h-15 rounded-full text-3xl text-white'>{item.icon}</span>
                </div>
                <div className='text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
    const Rightvalues=value.slice(2,4).map(item=>{
        return(
            <div key={item.id} className='flex flex-row flex-1 gap-6 items-center'>
                <div>
                    <span  className=' flex justify-center items-center bg-gradient-to-r from-orange-300 to-orange-500 w-15 h-15 rounded-full text-3xl text-white'>{item.icon}</span>
                </div>
                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>

            </div>
        )
    })
  return (
   <section >
    <div className='max-w-[1400px] mx-auto md:px-10 px-7'>
        <Heading highlight='Our' heading='Values' />
        <div className='flex md:flex-row flex-col md:gap-5'>
            {/* left div */}
            <div className='md:w-1/2 md:min-h-120 min-h-80 flex flex-col justify-between'>{Leftvalues}</div>
           
            <div></div>
            {/* center div */}
            <div className='md:flex md:w-1/2 hidden'>
                <img src={Valueimage} alt="image"  className='md:mt-30'/>
            </div>
            {/* right div */}
            <div className='md:w-1/2 md:min-h-120 min-h-80 flex flex-col justify-between'>{Rightvalues}</div>
        </div>
    </div>
   </section>

   )
}

export default Values

const value=[
    {
        id:1,
        title:'Trust',
        para:'We build trust through transparency and accountability in all our dealings.',
        icon:<FaHeart />
    },
    {
        id:2,
        title:'Food Safety',
        para:'We prioritize safety in every product we offer, ensuring customer satisfaction.',
        icon:<MdSafetyCheck />
    },
    {
        id:3,
        title:'Freshness',
        para:'We ensure that our products are always fresh and of the highest quality.',
        icon:<IoIosLeaf />
    },
    {
        id:4,
        title:'Organic',
        para:'We believe in the power of organic farming to nourish our bodies and protect our planet.',
        icon:<GiChestnutLeaf />
    }


]