import React from 'react'
import ContactImg from '../../assets/contact-background.jpg'
import Materials from '../Home/Materials'

const Contact = () => {
  return (
   <div className=" min-h-screen">
           <div className=" relative w-full h-[400px] bg-center bg-cover flex items-center justify-center "
             style={{ backgroundImage: `url(${ContactImg})` }}
           >
            <div className=" absolute inset-0 bg-black/40" />
          <h2 className=" z-10 text-4xl font-bold text-white">Contact Me</h2>
           </div>
           <Materials/>
         </div>
  )
}

export default Contact