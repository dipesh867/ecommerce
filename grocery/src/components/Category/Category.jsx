import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/aaa.png'
import MeatCat from '../../assets/meat.png'
import DairyCat from '../../assets/dairy.png'
import Button from '../Button/Button'


const Category = () => {

  const renderCards=category.map(card=>{
    return(
      <div className='flex-1 basis-[300px]'>
        {/* card image */}
        <div className=' w-full min-h-[35vh] relative -mb-15'>
          <img src={card.image} alt={card.name} className='absolute bottom-0' />
        </div>

        {/* card content */}
        <div className=' pt-15 p-8 bg-zinc-100 rounded-xl'>
          <h3 className='text-zinc-800 text-3xl font-bold '>{card.title}</h3>
          <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
          <Button content='See All' />
        </div>
      </div>
    )
  })
  return (
   <section className='max-w-[1400px] mx-auto md:px-10 px-7'>
    <div className=''>
      <Heading highlight='Shop' heading='by Category'/>
    {/* category cards */}
    <div className='flex flex-wrap md:flex-row gap-10 md:mt-10 mt:0'>
      {renderCards}
    </div>
    </div>
    
   </section>
  )
}

export default Category
const category=[
    {
        id:1,
        title:'Fruits and Veggies',
        description:'Fresh and organic fruits and vegetables from local farm ',
        image:FruitsCat
    },
    {
        id:2,
        title:'Dairy Products',
        description:'Fresh and organic dairy products directly from local farm ',
        image:DairyCat
    },
    {
        id:3,
        title:'Meat & Sea Food',
        description:'High quality and fresh meat and fish rich in proteins.',
        image:MeatCat
    }
]
