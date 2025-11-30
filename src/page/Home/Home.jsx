import React from 'react'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import Products from '../Shop/Products'
import Expriences from './Expriences'
import Materials from './Materials'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div className=' '>
        <Hero/>
        <WhyChooseUs/>
        <Products hadeline="best selling product"/>
        <Expriences/>
        <Materials/>
        <Testimonials/>
    </div>
  )
}



export default Home