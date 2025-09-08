import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import ProductList from '../ProductList/ProductList';
import ShopCover from '../../assets/shopnow.jpeg'


const Shop = () => {
    const category=[...new Set(ProductList.map(item=>(item.category)))]
  return (
    <div>
      <Categorypage title='Shop Now' image={ShopCover} category={category} />
    </div>
  )
}

export default Shop
