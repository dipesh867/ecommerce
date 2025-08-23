import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import FruitsBanner from '../../assets/FruitsCover.jpg'

const Fruits = () => {
    const category=['Fruits','Vegetables']
  return (
    <div>
    <Categorypage title="Fruits & Veggies" image={FruitsBanner} category={category}/>
    </div>
  )
}

export default Fruits
