import React from 'react'
import Categorypage from '../Categorypage/Categorypage'
import DairyBanner from '../../assets/dairycover.jpg'

const Dairy = () => {
    const category=['Dairy']
  return (
    <div>
    <Categorypage title="Dairy Products" image={DairyBanner} category={category}/>
    </div>
  )
}

export default Dairy
