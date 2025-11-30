import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import { reviews } from "../../utils/reviews";
import Rating from "../../component/Rating";

const Testimonials = () => {
  return (
    <section className="section-contaner px-8">
      <div className=" text-center mb-12">
        <h3 className=" uppercase text-lg font-semibold text-amber-500 mb-4">
          Testimonials
        </h3>
        <h2 className=" capitalize text-4xl font-bold  mb-4">
          Our Client Reviews
        </h2>
      </div>

      {/* Reviews section  */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper "
   
      >

      {reviews.map((review,index)=>(
        <SwiperSlide key={index} className=" bg-no-repeat bg-cover rounded-lg" style={{backgroundImage:`url(${review.coverImg})`}}>
          <div className=" md:min-h-[547px] flex items-center justify-center hover:-translate-y-5  hover:transition-all duration-300 hover:cursor-pointer">
            <div className="mt-16 mb-5 bg-white border border-gray-100 rounded-xl md:w-4/5 w-full p-4 relative">
              <img src={review.image} className=" size-20 absolute -top-10 left-1/2 -translate-x-1/2 ring-2 ring-amber-500 object-cover rounded-full"/>
              <div className=" mt-16 text-center">
             <h3 className="text-lg font-semibold dark:text-black">{review.name}</h3>
             <p className=" mb-3 dark:text-black">Verifed Customer</p>
             <p className="text-gray-500 dark:text-black mb-4">{review.review}</p>
             <div className="mx-auto flex items-center justify-center text-center mb-2">
              <Rating Rating={review.rating}/>
             </div>
            </div>
            </div>
            
          </div>
        </SwiperSlide>
      ))}
       
        
      </Swiper>

    </section>
  );
};

export default Testimonials;
