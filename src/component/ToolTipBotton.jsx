import React from 'react'

const ToolTipBotton = ({position='bottom', colors=['bg-red-600','bg-green-600','bg-blue-600']}) => {

    const positionClasses ={
        bottom:{
            tooltip:'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
            arrow:'left-1/2 transform -translate-x-1/2 -bottom-2 border-1'
        },
         top:{
            tooltip:'top-full left-1/2 transform -translate-x-1/2 mt-3',
            arrow:'left-1/2 transform -translate-x-1/2 -bottom-2 border-1'
        }
    }
  return (
     <div className=" relative group">
            <button className=" relative p-4 bg-white/25 rounded-full border border-white text-xl">
              <div className={` hidden absolute  p-2 rounded-lg bg-white/25 shadow-md group-hover:flex space-x-1 
              ${positionClasses[position].tooltip}`}>

              {colors.map((color,index)=>(
                <div key={index} className={`size-6 ${color} border border-white rounded-full`}/>
              ))}

                  {/* tooltip arrow */}
                  <div className={`absolute  ${positionClasses[position].arrow} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent boder-t-8 border-t-white/35`} />
              </div>
            </button>
          </div>
  )
} 

export default ToolTipBotton