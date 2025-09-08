import React from 'react'
import ProductList from '../ProductList/ProductList'
import Categorypage from '../Categorypage/Categorypage'
import AllBanner from '../../assets/allcover.jpg'


const Allproducts = () => {

    const category=[...new Set(ProductList.map(item=>(item.category)))]

  return (
    <div>
        
     <Categorypage title="All Products" image={AllBanner} category={category}/>
    </div>
    
  )
}

export default Allproducts
