import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'


const Products = () => {
    const [activeTab, setactiveTab]=useState('All')
    const categories=['All','Fruits','Vegetables','Dairy','Meat','SeaFood']
    let filteredItems=activeTab==='All'? ProductList:ProductList.filter(item=>item.category===activeTab)

    const renderCards=filteredItems.slice(0,8).map(product=>{
        return(
            <Cards key={product.id} title={product.title} price={product.price} image={product.image} />
        )
    })
    return (
   <section>
    <div className='max-w-[1400px] mx-auto md:px-10 px-7 '>
        <Heading highlight='Our' heading='Products'/>
        {/* tabs */}
        <div className='flex gap-3 flex-wrap justify-center'>
            {categories.map(category=>{
                return(
                    <button key={category} 
                    className={` px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === category ? 'bg-gradient-to-b from-orange-300 to-orange-500 text-white ':'bg-zinc-100'}`}
                    onClick={()=>setactiveTab(category)}>

                        {category}
                    </button>

                )
            })}
        </div>
        {/* product listing */}
        <div className='grid md:grid-cols-4 grid-cols-1 gap-9 mt-20'>
            {renderCards}
        </div>
        <div className='mt-15 mx-auto w-fit'>
            <Button content='View All'/>
        </div>

    </div>
   </section>
  )
}

export default Products

