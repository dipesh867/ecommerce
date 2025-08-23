import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import MeatCover from '../../assets/meatcover.jpeg'

const Meat = () => {
    const category=['Meat','SeaFood']
  return (
    <div>
      <Categorypage title='Meat and SeaFood' image={MeatCover} category={category}/>
    </div>
  )
}

export default Meat
