import React from 'react'
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const Rating = ({Rating}) => {
    const totalStar = 5
  return (
    <div className=' flex space-x-1'>
    {Array.from({length:totalStar},(_,index)=>{
        const starIndex = index + 1
        return starIndex <= Rating ? (<IoIosStar key={index} className=' text-yellow-500'/>) : (<IoIosStarHalf key={index} className=' text-gray-400'/>)
    })}
    </div>
  )
}

export default Rating