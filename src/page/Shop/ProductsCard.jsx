import React, { useContext } from 'react'
import { getImage } from '../../utils/GetImageURL'
import Rating from '../../component/Rating'
import { FaCirclePlus, FaPlus } from "react-icons/fa6";
import { CartContext } from '../../Contaxt/CartContext';

const ProductsCard = ({product}) => {

  const {addToCart} = useContext(CartContext)
  return (
    <div>
    <div className='bg-[#FAFAFA]'>
       <img src={getImage(`${product.imageUrl}`)}/>
    </div>
    <div className='p-6 bg-white dark:bg-black shadow-sm'>
      <h2 className='text-base mb-1'>{product.category}</h2>
      <h3 className=' font-semibold text-xl mb-2'>{product.name}</h3>
      <Rating Rating={product.rating}/>
      <div className=' mt-5 flex justify-between items-center'>
        <p className=' text-gray-800 dark:text-white font-bold text-lg'>$<sub>{product.price}</sub></p>
       <button onClick={()=>{
        addToCart(product)
       }} className='bg-gray-800 text-white p-2 rounded-full '> <FaPlus/></button>

      </div>
    </div>
       
    </div>
  )
}

export default ProductsCard