import React, { useState } from "react";
import { productsData } from "../../utils/products";
import ProductsCard from "./ProductsCard";
import Button from "../../component/Button";

const Products = ({ hadeline }) => {
    const  categorys = ["Chair","Beds","Sofa","Lamp"]
    const [selectedCategory,SetSelectedCategory]  = useState("Chair")
    const [visibleProduct,setVisibleProduct] = useState(4)

    const FillterdProduct = productsData.filter((product)=>product.category === selectedCategory)

    const lodeMore = () =>{
      setVisibleProduct((prv)=> prv + 4)
    }
  return (
    <div>
      <div className="section-contaner">
        <h2 className=" text-4xl text-center font-bold my-8">{hadeline}</h2>
        {/* category */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
            <div className=" flex flex-col md:flex-row items-center md:justify-between justify-center gap-4"> 
                {categorys.map((category)=>(
                    <button onClick={()=>{SetSelectedCategory(category)
                                        setVisibleProduct(4)
                    }} key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-amber-500 hover:text-white transition-colors ${selectedCategory === category ? 'bg-white text-amber-500': 'text-gray-800' }`}>{category}</button>
                ))}
            </div>
        </div>
        {/* product grid  */}

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
           {FillterdProduct.slice(0,visibleProduct).map((product,index)=>(
            <ProductsCard key={index} product ={product}/>
           ))}
        </div>

       {/* load moro  */}

       {visibleProduct < FillterdProduct.length &&(
        <div className=" flex items-center justify-center mx-auto text-center mt-8 font-bold text-lg" onClick={lodeMore}>
          <Button text="View Moro"/>
        </div>
       )}


      </div>
    </div>
  );
};

export default Products;
