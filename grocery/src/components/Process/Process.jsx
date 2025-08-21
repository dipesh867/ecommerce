import React from 'react'
import Heading from '../Heading/Heading'
import { TbHexagonNumber1Filled } from "react-icons/tb";
import { TbHexagonNumber2Filled } from "react-icons/tb";
import { TbHexagonNumber3Filled } from "react-icons/tb";
import { TbHexagonNumber4Filled } from "react-icons/tb";
import { PiPlantBold } from "react-icons/pi";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FaTruck } from "react-icons/fa6";

const Process = () => {
  const renderSteps=steps.map(item=>{
    return <div className={`flex-1 basis-[300px] ${item.id %2 ==0?'md:-mt-100':''}`}>
      <span className=' flex mx-auto w-18 h-18 text-8xl text-zinc-800 mx-auto'>{item.number}</span>
      <div className='flex items-center justify-center mt-10 gap-x-5'>
        <div className='flex item-center'>
          <span className='flex bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full justify-center items-center text-3xl '>{item.icon}</span>
        </div>
        <div >
        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
        <p className='text-zinc-600 mt-2'>{item.para}</p>
        </div>
      </div>

    </div>

  })
  return (
    <section>
        <div className='max-w-[1440px] mx-auto px-10 py-10'>
        <div className='w-fit mr-auto'>
          <Heading highlight='Our' heading='Process'/>
        </div>
        <div className='flex flex-wrap md:mt-20 gap-y-17 items-center justify-center md:pt-30 pt:15 '>
          {renderSteps}
        </div>
        </div>
    </section>
  )
}

export default Process

const steps=[
  {
    id:1,
    number:<TbHexagonNumber1Filled />,
    title:'Sourcing',
    para:'We source the freshest ingredients from local farms.',
    icon:<PiPlantBold/>
  },
  {
    id:2,
    number:<TbHexagonNumber2Filled />,
    title:'Manufacturing',
    para:'We prepare the ingredients with care and precision.',
    icon:<PiPlantBold/>
  },
  {
    id:3,
    number:<TbHexagonNumber3Filled />,
    title:'Quality Control',
    para:'We ensure the highest quality standards are met.',
    icon:<RiVerifiedBadgeLine />
  },
  {
    id:4,
    number:<TbHexagonNumber4Filled />,
    title:'Logistics',
    para:'We manage the distribution of products to ensure freshness.',
    icon:<FaTruck />
  },
]
