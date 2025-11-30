import React, { useContext,  } from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import ToolTipBotton from "../../component/ToolTipBotton";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { ThemeContext } from "../../Contaxt/ThemeContext";


const Hero = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <section
      className=" relative min-h-screen bg-center   bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className=" absolute inset-0 bg-black/40" />
      <div className=" relative px-2 pt-28 md:pt-40 md:pb-60 space-y-8  mx-auto text-center text-white max-w-3xl  ">
        <h1 className=" text-4xl lg:text-6xl font-medium   mx-auto lg:leading-tight leading-snug ">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-lg lg:text-2xl font-normal">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        {/* search incon */}
        <div className=" relative inline-block z-30">
          <input
            type="text"
            placeholder="search Furniture"
            className="text-white w-full  px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none"
          />
          <div className=" absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-amber-500 rounded-full cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* buttom blur effect  */}
      <div className=" absolute inset-x-0 bottom-0 h-2/4 -mg-2 bg-gradient-to-t  from-white/80 via-transparent to-transparent blue-sm" />

      {/* hover tooltip box  */}
    
        <div className=" hidden xl:block absolute bottom-40 left-24">
          <ToolTipBotton position="bottom"/>
        </div>

         <div className=" hidden xl:block absolute bottom-52 left-96">
          <ToolTipBotton position="bottom"/>
        </div>

        <div className=" hidden xl:block absolute bottom-24 right-[820px]">
          <ToolTipBotton position="bottom"/>
        </div>

        <div className=" hidden xl:block absolute bottom-12 right-16">
          <ToolTipBotton position="bottom"/>
        </div>
     
      {/* dark and light mode  */}
      <div className=" absolute bottom-28 right-20 z-50">
      <button onClick={toggleTheme} className=" focus:outline-none font-bold text-lg p-5 bg-black rounded-full">
        {isDarkMode ? <IoIosSunny className=" text-yellow-300"/> : <IoIosMoon className=" text-yellow-300" />}
      </button>

      </div>
  
    </section>
  );
};

export default Hero;
