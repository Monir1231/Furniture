import React from "react";
import shopImg from "../../assets/shop.jpg";
import Products from "./Products";

const Shop = () => {
  return (
    <section className=" min-h-screen">
    {/* banner  */}
      <div className=" relative w-full h-[400px] bg-center bg-cover flex items-center justify-center "
        style={{ backgroundImage: `url(${shopImg})` }}>
        <div className=" absolute inset-0 bg-black/40" />
        <h2 className=" z-10 text-4xl font-bold text-white">
          Shop Our Product
        </h2>
      </div>
      {/* product part  */}
      <Products hadeline="What your chooses"/>
    </section>
  );
};

export default Shop;
