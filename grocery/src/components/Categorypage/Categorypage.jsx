import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
const Categorypage = (props) => {
    const renderCategory = ProductList.map(product => {
        return props.category.map(item=>{
            if (product.category===item){
                return (
            <Cards key={product.id} image={product.image} name={product.name} price={product.price} />
        )
            }
        })
        
    })
    return (

        <div className=''>
            <div>
                <Banner title={props.title} image={props.image}/>

            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-9 mt-20 mb-20 max-w-[1400px] px-7 md:px-10 mx-auto'>
                {renderCategory}
            </div>

        </div>
    )
}

export default Categorypage
