import React from 'react'
import expriences from '../../assets/expricences.png'
import Button from '../../component/Button'

const Expriences = () => {
  return (
    <section className='section-contaner my-24 flex flex-col lg:flex-row items-center justify-center md:gap-16 gap-8'>
      <div className='md:w-1/2 h-[541px]'>
        <img src={expriences} alt='ex' className=' w-full h-full'/>
      </div>
      <div className='md:w-1/2 mx-auto'>
        <h3 className=' uppercase text-lg font-semibold text-amber-500 mb-4'>Expriences</h3>
        <h2 className=' capitalize text-4xl font-bold  mb-4'>we provide you the <br/> best experience</h2>
        <p className=' text-gray-800 dark:text-white mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>

        <Button text="Moro Info"/>
      </div>
    </section>
  )
}

export default Expriences