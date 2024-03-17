import React from 'react'
import '../css/poorboy.css'

const Poorboy = () => {
  return (
    < >
      <section className="poorboy">
       <div className="container mx-auto px-44">
         <div className="flex">
          <div className="flex-1"></div>
          <div className="flex-1 ps-10">
            <div className="py-24">
              <h1 className="font-medium text-[40px] text-white leading-[50px]">No one has ever become poor by giving</h1>
              <p className='text-[15px] leading-[24px] text-slate-300 py-8'>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum dignissim posuere cubilia Curae; Suspendisse at consectetur massa. Curabitur non ipsum nisinec dapibus elit. Donec nec magna id lacus consequat posuere. Aenean ut diam vitae ante interdum interdum ut sit amet metus. </p>
              <button
                  type="submit"
                  className="bg-[#D43C18] text-white font-medium text-[15px] py-2.5 px-6 rounded-3xl hover:bg-white hover:text-[#1e1e1e] transition-all"
                >
                  Donate Now!
                </button>
            </div>
          </div>
         </div>
       </div>
      </section>
    </>
  )
}

export default Poorboy