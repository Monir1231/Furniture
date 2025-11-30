import React from 'react'
import Button from '../../component/Button'



const WhyChooseUs = () => {
  return (
    <div className='section-contaner'>
        <div className=' my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-12'>
            <div>
                <h2 className=' text-4xl font-bold'>Why <br/>Choosing us</h2>
            </div>

            <div>
                <h3 className=' text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className=' text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text="Moro Info"/>
            </div>

            <div>
                <h3 className=' text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className=' text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text="Moro Info"/>
            </div>

            <div>
                <h3 className=' text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className=' text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text="Moro Info"/>
            </div>


        </div>
    </div>
  )
}

export default WhyChooseUs