import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { CartContext } from "../Contaxt/CartContext";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About us" },
  { path: "/contact", label: "Contact us" },
];

const NavItems = ({handleToggle}) => {
  return (
    <ul className=" flex flex-col md:flex-row space-x-8 items-center gap-6 ">
      {navItems.map((item, index) => (
        <li key={index} onClick={handleToggle}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                 ? `
        relative text-amber-500 font-semibold
        after:content-[''] after:absolute after:left-0 after:-bottom-2
        after:w-full after:h-[2px] after:bg-amber-500 after:rounded-md
        after:scale-x-100 after:origin-left  after:transition-transform after:duration-400
      `
      : `
        relative  hover:text-amber-500  transition-colors
        after:content-[''] after:absolute after:left-0 after:-bottom-2
        after:w-full after:h-[2px] after:bg-amber-400  after:rounded-md
        after:scale-x-0 hover:after:scale-x-100
        after:origin-left after:transition-transform after:duration-400
      `
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const [scrolled,setScrolled] = useState(false)

  const handleToggle = () =>{
    setIsMenuOpen(prv => !prv)
  }

  // when scrolled bg color 

  useEffect(()=>{
    const handleScrolle = () =>{
      if(window.scrollY > 50){
       setScrolled(true)
      } else{
         setScrolled(false)
      }
    }

    window.addEventListener('scroll',handleScrolle)

    return () =>{
      window.addEventListener('scroll',handleScrolle)
    }
  },[])

  // cart item from context 

  const {cartCount} = useContext(CartContext)
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out  ${scrolled ? ' bg-white shadow-md text-black' :' bg-transparent text-white '}`}>
      <nav className=" max-w-screen-2xl mx-auto container  flex items-center justify-between py-6 px-4">
        {/* logo  */}
        <Link href="/" className=" md:text-2xl text-xl font-bold">Farnuture </Link>

        {/* mobile hambarger menu */}
        <div onClick={handleToggle} className=" md:hidden text-xl  cursor-pointer hover:text-amber-600">
         {isMenuOpen ? null  : <FaBars/> }
        </div>

        {/* munu */}
        <ul className="  hidden md:flex ">
          <NavItems />
        </ul>


        {/* mobile menu item  */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-0 flex flex-col items-center justify-center space-y-8  transition-transform transform ${isMenuOpen ? ' translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className=" absolute text-white  text-xl top-4 right-4 cursor-pointer" onClick={handleToggle}>
            <RxCross1/>
          </div> 
          <div className=" text-white">
            <NavItems handleToggle={handleToggle} />
          </div>
        </div>

        {/* card icon */}
        <div className=" hidden md:block cursor-pointer relative">
        <FaBagShopping  className=" text-xl"/>
        <sup className=" absolute top-0 -right-3 bg-amber-500 text-white w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</sup>
        
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
