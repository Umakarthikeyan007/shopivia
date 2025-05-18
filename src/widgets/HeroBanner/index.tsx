import React from "react";
import heroBannerImage from "../../assets/Herobanner.jpg";

const HeroBanner = () => {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBannerImage})` }}
    >
      <div className="absolute left-16 top-[10%] max-w-[45%] w-full p-4 flex flex-col gap-8">
        <p className="font-anton text-[48px] font-medium leading-tight">
          Find Clothes <br />
          that matches <br />
          your style
        </p>
        <p className="font-poppins opacity-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className="bg-black text-white font-satoshi w-[210px] p-[14px] rounded-full">Shop Now</button>
        <div className="mt-4 flex gap-8">
          <div>
            <p className="text-[40px] font-bold leading-[100%]">200+</p>
            <p className="font-poppins opacity-60">International Brands</p>
          </div>
           <div>
            <p  className="text-[40px] font-bold leading-[100%]">2,000+</p>
            <p className="font-poppins opacity-60">High-Quality Products</p>
          </div>
           <div>
            <p className="text-[40px] font-bold leading-[100%]">30,000+</p>
            <p className="font-poppins opacity-60">Happy Customers 200   </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
