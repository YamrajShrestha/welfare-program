import React from "react";
import { SlLocationPin } from "react-icons/sl";
import {
  FaMobileScreen,
  FaRegEnvelope,
  FaXTwitter,
  FaFacebookF,
  FaVimeoV,
  FaSkype,
} from "react-icons/fa6";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <section className="header-top bg-[#1E1E1E] py-1">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex-left">
              <ul className="flex gap-10 items-center">
                <li className="text-[#9c9c9c] text-[11px] font-normal flex items-center gap-3">
                  <SlLocationPin size={16} />
                  <span>Brooklyn, NY 10036, United States</span>
                </li>
                <li className="text-[#9c9c9c] text-[11px] font-normal flex items-center gap-3">
                  <FaMobileScreen size={16} />
                  1-800-123-1234
                </li>
                <li className="flex items-center gap-3">
                  <FaRegEnvelope color="#9c9c9c" />
                  <a
                    className="text-[#9c9c9c] text-[11px] font-normal hover:text-white transition-all"
                    href=""
                  >
                    example@welfare_ngo.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-right">
              <div className="social-icons text-[#9c9c9c] flex gap-2">
                <FaXTwitter className="text-[8px] bg-[#9c9c9c] text-[#1e1e1e] rounded-full p-1.5 box-content flex items-center justify-center hover:bg-white transition-all" />
                <FaFacebookF className="text-[8px] bg-[#9c9c9c] text-[#1e1e1e] rounded-full p-1.5 box-content flex items-center justify-center hover:bg-white transition-all" />
                <FaVimeoV className="text-[8px] bg-[#9c9c9c] text-[#1e1e1e] rounded-full p-1.5 box-content flex items-center justify-center hover:bg-white transition-all" />
                <FaSkype className="text-[8px] bg-[#9c9c9c] text-[#1e1e1e] rounded-full p-1.5 box-content flex items-center justify-center hover:bg-white transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
