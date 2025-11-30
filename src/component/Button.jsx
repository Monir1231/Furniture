import React from "react";
import ArrowIcon from "../assets/button-icon.png";


const Button = ({text}) => {
  return (
    <button className=" text-amber-500 flex items-center justify-center gap-1">
      {text}
      <img src={ArrowIcon} />
    </button>
  );
};

export default Button;
