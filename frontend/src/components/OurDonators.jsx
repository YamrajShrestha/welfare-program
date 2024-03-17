import React from "react";
import Donators from "./Donators";

const OurDonators = () => {
  return (
    <>
      <section className="our-donators bg-white py-16">
        <div className="container mx-auto px-44">
          <h2 className="text-center text-[#1e1e1e] font-medium text-[28px] leading-[40px] pb-16">
            Our Donators
          </h2>
          <Donators />
        </div>
      </section>
    </>
  );
};

export default OurDonators;
