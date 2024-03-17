import React from "react";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import '../css/LatestNews.css'

const LatestNews = () => {
  return (
    <>
      <section className="latest-news bg-[#f4f4f4] py-16">
        <div className="container mx-auto px-44">
          <h2 className="text-center text-[#1e1e1e] font-medium text-[28px] leading-[40px] pb-16">
            Latest News
          </h2>
          <div className="grid grid-cols-4 gap-0 bg-white">
            <Link to="" className="img-banner">
              <div className="img-holder"><img src="/image/ln-1.jpg" alt="" /></div>
            </Link>
            <div className="meta-card arrow-one">
              <div className="p-5">
                <p className="text-xs text-[#959595] mb-2">On May 29, 2014</p>
                <Link
                  to=""
                  className="font-medium text-base hover:text-[#d43c18] transition-all"
                >
                  Donate to support the cause
                </Link>
                <p className="text-[13px] text-[#959595] py-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque fermentum massa vel enim feugiat gravida. Phasellus
                  velit risus, euismod a...
                </p>
                <div className="flex justify-between mt-8">
                  <span className="text-[13px] text-[#959595] flex gap-1">
                    By
                    <Link
                      className="text-[#d43c18] hover:text-[#959595] transition-all"
                      to=""
                    >
                      Steven Masters
                    </Link>
                  </span>
                  <span className="text-[#959595] flex gap-1">
                    0
                    <Link to="">
                      <BsChat className="inline hover:text-[#d43c18] transition-all" />
                    </Link>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#959595] flex gap-1">
                    In
                    <Link
                      className="text-[#d43c18] hover:text-[#959595] transition-all"
                      to=""
                    >
                      News
                    </Link>
                  </span>
                  <span className="text-[#959595] flex gap-1">
                    45
                    <Link to="">
                      <FaRegHeart className="inline hover:text-[#d43c18] transition-all" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <Link to="" className="img-banner">
              <div className="img-holder"><img src="/image/ln-2.jpg" alt="" /></div>
            </Link>
            <div className="meta-card arrow-one">
              <div className="p-5">
                <p className="text-xs text-[#959595] mb-2">On May 29, 2014</p>
                <Link
                  to=""
                  className="font-medium text-base hover:text-[#d43c18] transition-all"
                >
                  Elderly care and support volunteering
                </Link>
                <p className="text-[13px] text-[#959595] py-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque fermentum massa vel enim feugiat gravida. Phasellus
                  velit risus, euismod a...
                </p>
                <div className="flex justify-between mt-4">
                  <span className="text-[13px] text-[#959595] flex gap-1">
                    By
                    <Link
                      className="text-[#d43c18] hover:text-[#959595] transition-all"
                      to=""
                    >
                      <span>Steven Masters</span>
                    </Link>
                  </span>
                  <span className="text-[#959595] flex gap-1">
                    0
                    <Link to="">
                      <BsChat className="inline hover:text-[#d43c18] transition-all" />
                    </Link>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#959595] flex gap-1">
                    In
                    <Link
                      className="text-[#d43c18] hover:text-[#959595] transition-all"
                      to=""
                    >
                      News
                    </Link>
                  </span>
                  <span className="text-[#959595] flex gap-1">
                    18
                    <Link to="">
                      <FaRegHeart className="inline hover:text-[#d43c18] transition-all" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="meta-card arrow-two">
              <div className="p-5">
                <p className="text-xs text-[#959595] mb-2">On May 29, 2014</p>
                <Link
                  to=""
                  className="font-medium text-base hover:text-[#d43c18] transition-all"
                >
                  Pregnancy & family support services
                </Link>
                <p className="text-[13px] text-[#959595] py-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque fermentum massa vel enim feugiat gravida. Phasellus
                  velit risus, euismod a...
                </p>
                <div className="flex justify-between mt-4">
                  <span className="text-[13px] text-[#959595] flex gap-1">
                    By
                    <Link
                      className="text-[#d43c18] hover:text-[#959595] transition-all"
                      to=""
                    >
                      Steven Masters
                    </Link>
                  </span>
                  <span className="text-[#959595] flex gap-1">
                    0
                    <Link to="">
                      <BsChat className="inline hover:text-[#d43c18] transition-all" />
                    </Link>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#959595] flex gap-1">
                    In
                    <Link
                      className="text-[#d43c18] hover:text-[#959595] transition-all"
                      to=""
                    >
                      News
                    </Link>
                  </span>
                  <span className="text-[#959595] flex gap-1">
                    16
                    <Link to="">
                      <FaRegHeart className="inline hover:text-[#d43c18] transition-all" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <Link to="" className="img-banner">
              <div className="img-holder"><img src="/image/ln-3.jpg" alt="" /></div>
            </Link>
            <div className="meta-card arrow-two">
              <div className="p-5">
                <p className="text-xs text-[#959595] mb-2">On May 29, 2014</p>
                <Link
                  to=""
                  className="font-medium text-base hover:text-[#d43c18] transition-all"
                >
                  Make change happen, volunteer!
                </Link>
                <p className="text-[13px] text-[#959595] py-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque fermentum massa vel enim feugiat gravida. Phasellus
                  velit risus, euismod a...
                </p>
                <div className="flex justify-between mt-8">
                  <span className="text-[13px] text-[#959595] flex gap-1">
                    By
                    <Link
                      className="text-[#d43c18] hover:text-[#959595] transition-all"
                      to=""
                    >
                      Steven Masters
                    </Link>
                  </span>
                  <span className="text-[#959595] flex gap-1">
                    0
                    <Link to="">
                      <BsChat className="inline hover:text-[#d43c18] transition-all" />
                    </Link>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] text-[#959595] flex gap-1">
                    In
                    <Link
                      className="text-[#d43c18] hover:text-[#959595] transition-all"
                      to=""
                    >
                      News
                    </Link>
                  </span>
                  <span className="text-[#959595] flex gap-1">
                    17
                    <Link to="">
                      <FaRegHeart className="inline hover:text-[#d43c18] transition-all" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <Link to="" className="img-banner">
              <div className="img-holder"><img src="/image/ln-4.jpg" alt="" /></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
