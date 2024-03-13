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
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <section className="header-top bg-[#1E1E1E] py-2">
        <div className="container mx-auto px-44">
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
              <div className="social-icons text-[#9c9c9c] flex gap-1.5">
                <FaXTwitter className="text-[9px] cursor-pointer bg-[#9c9c9c] text-[#1e1e1e] rounded-full p-[5px] box-content flex items-center justify-center hover:bg-white transition-all" />
                <FaFacebookF className="text-[9px] cursor-pointer bg-[#9c9c9c] text-[#1e1e1e] rounded-full p-[5px] box-content flex items-center justify-center hover:bg-white transition-all" />
                <FaVimeoV className="text-[9px] cursor-pointer bg-[#9c9c9c] text-[#1e1e1e] rounded-full p-[5px] box-content flex items-center justify-center hover:bg-white transition-all" />
                <FaSkype className="text-[9px] cursor-pointer bg-[#9c9c9c] text-[#1e1e1e] rounded-full p-[5px] box-content flex items-center justify-center hover:bg-white transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="heading-middle bg-[#F4F4F4] py-8">
        <div className="container mx-auto px-44">
          <div className="flex justify-between items-center">
            <Link to="/" className="logo">
              <img
                src="image/logo-1.png"
                alt="Welfare"
                width={238}
                height={45}
                className="max-w-[238px]"
              />
            </Link>
            <div className="flex-right flex gap-5 items-center">
              <FaSearch className="text-[13px] bg-[#C4C4C4] text-white rounded-full p-[15px] box-content flex items-center justify-center" />
              <button
                type="submit"
                className="bg-[#D43C18] text-white font-medium text-[15px] py-2.5 px-6 rounded-3xl hover:bg-[#0F0F0F] transition-all"
              >
                Donate Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="navbar bg-white">
        <div className="container mx-auto px-44">
          <nav>
            <ul className="flex gap-10">
              <li>
                <Link
                  className="font-medium text-sm hover:text-[#d43c18] transition-colors active"
                  to=""
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-[#d43c18] transition-colors "
                  to=""
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-[#d43c18] transition-colors "
                  to=""
                >
                  Shortcodes
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-[#d43c18] transition-colors "
                  to=""
                >
                  Post Types
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-[#d43c18] transition-colors "
                  to=""
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-[#d43c18] transition-colors "
                  to=""
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-[#d43c18] transition-colors "
                  to=""
                >
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
