import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className=' bg-[#F7F7F7] text-black  dark:text-white pt-2 mb-5'>
      <div className='section-contaner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8 '>
        {/* logo and detiels  */}
        <div className=' md:col-span-2'>
          <h2 className=' text-2xl font-bold mb-4'><Link to='/'>Panto</Link></h2>
          <p className=' text-[#1E1E1E] md:mr-12'> YourCompany is dedicated to providing the best quality products to enhance your home and lifestyle. We combine style and comfort to transform your living spaces into modern sanctuaries.</p>

        </div>

        {/* Service  */}
         <div>
          <h2 className=' text-xl font-semibold text-amber-500 mb-4'>Services</h2>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500'>Email Marketing</Link>
            </li>
             <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500'>Campaings</Link>
            </li>
             <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500'>Branding</Link>
            </li>
          </ul>
         </div>

          {/* Furniture */}
         <div>
          <h2 className=' text-xl font-semibold text-amber-500 mb-4'>Furniture</h2>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500'>Email Marketing</Link>
            </li>
             <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500'>Campaings</Link>
            </li>
             <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500'>Branding</Link>
            </li>
          </ul>
         </div>


          {/* Follow Us */}
         <div>
          <h2 className=' text-xl font-semibold text-amber-500 mb-4'>Follow Us</h2>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500 flex items-center space-x-2'>
                <FaFacebookF/> <span>Facebook</span>
              </Link>
            </li>
             <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500 flex items-center space-x-2'>
                <FaTwitter/> <span>Twitter</span>
              </Link>
            </li>
             <li>
              <Link to="/" className=' text-[#1E1E1E] hover:text-amber-500 flex items-center space-x-2'><FaInstagram/><span>Instagram</span></Link>
            </li>
          </ul>
         </div>

      </div>
       {/* copyright  */}
       <div className='mt-12 section-contaner flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-left text-black dark:bg-gray-800 border-t border-gray-300 pt-4'>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <div className=' flex items-center gap-10'>
          <p>Terms & Condtions </p>
          <p>Privacy polixy</p>
        </div>
       </div>
    </footer>
  )
}

export default Footer