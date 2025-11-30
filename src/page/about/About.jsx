import React from "react";
import AboutImg from "../../assets/about-background.jpg";
import Expriences from "../Home/Expriences";

const About = () => {
  return (
    <div className=" min-h-screen">
      <div
        className=" relative w-full h-[400px] bg-center bg-cover flex items-center justify-center "
        style={{ backgroundImage: `url(${AboutImg})` }}
      >
        <div className=" absolute inset-0 bg-black/40" />
        <h2 className=" z-10 text-4xl font-bold text-white">About Our Me</h2>
      </div>
      <Expriences/>
    </div>
  );
};

export default About;
