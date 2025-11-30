import React from 'react'
import material3 from "../../assets/material3.png"
import material1 from "../../assets/material1.png"
import material2 from "../../assets/material2.png"

import Button from '../../component/Button'

const Materials = () => {
  return (
    <section className='section-contaner my-24 flex flex-col lg:flex-row items-center justify-center md:gap-16 gap-8'>
      
      <div className='md:w-1/2 mx-auto'>
        <h3 className=' uppercase text-lg font-semibold text-amber-500 mb-4'>Expriences</h3>
        <h2 className=' capitalize text-4xl font-bold  mb-4'>Very serious <br/> materials for making <br/> furniture</h2>
        <p className=' text-gray-800 dark:text-white mb-5 lg:w-2/3'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>

        <Button text="Moro Info"/>
      </div>

      <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center'>
        <div>
            <img src={material1} />
             <img src={material2}/>
        </div>
        <div className='md:col-span-2 col-span-1'>
             <img src={material3} className='w-full md:h-[541px]'/>
        </div>
      </div>
    </section>
  )
}

export default Materials