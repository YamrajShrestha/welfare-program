import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlWallet } from "react-icons/sl";
import { Autoplay } from "swiper/modules";
import { Flex, Progress } from "antd";
import "../css/CauseList.css";
const CauseList = () => {
  return (
    <>
      <section className="cause-list bg-white py-8">
        <div className="container mx-auto px-44">
          <h2 className="font-semibold text-2xl text-[1e1e1e]">Cause List</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={35}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper pt-8"
          >
            <SwiperSlide>
              <div className="card">
                <div className="img-banner">
                  <div className="img-holder">
                    <img src="/image/cause-1.jpg" alt="" />
                    <SlWallet className="SlWallet" />
                  </div>
                </div>
                <h2 className="text-medium text-base py-3">
                  <a
                    className="transition-all text-[#1e1e1e] hover:text-[#d43c18]"
                    href=""
                  >
                    Family Support Program
                  </a>
                </h2>
                <p className="text-[#959595] text-[13px] pb-3">
                  Volunteering is generally considered an altruistic activity
                  and is intended to promote goodness or improve human quality
                  of life.
                </p>
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-[#1e1e1e]">
                    Donated
                  </h4>
                  <h4 className="text-sm font-medium text-[#1e1e1e]">100%</h4>
                </div>
                <Flex gap="small" vertical>
                  <Progress
                    percent={100}
                    showInfo={false}
                    strokeColor="#d43c18"
                    strokeLinecap="butt"
                    strokeWidth={4}
                  />
                </Flex>
                <p className="text-[#959595] text-[13px]">$0 to go</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="img-banner">
                  <div className="img-holder">
                    <img src="/image/cause-2.jpg" alt="" />
                    <SlWallet className="SlWallet" />
                  </div>
                </div>
                <h2 className="text-medium text-base py-3">
                  <a
                    className="transition-all text-[#1e1e1e] hover:text-[#d43c18]"
                    href=""
                  >
                    Against Unemployment
                  </a>
                </h2>
                <p className="text-[#959595] text-[13px] pb-3">
                  Volunteering is generally considered an altruistic activity
                  and is intended to promote goodness or improve human quality
                  of life.
                </p>
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-[#1e1e1e]">
                    Donated
                  </h4>
                  <h4 className="text-sm font-medium text-[#1e1e1e]">25%</h4>
                </div>
                <Flex gap="small" vertical>
                  <Progress
                    percent={25}
                    showInfo={false}
                    strokeColor="#d43c18"
                    strokeLinecap="butt"
                    strokeWidth={4}
                  />
                </Flex>
                <p className="text-[#959595] text-[13px]">$112003 to go</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="img-banner">
                  <div className="img-holder">
                    <img src="/image/cause-3.jpg" alt="" />
                    <SlWallet className="SlWallet" />
                  </div>
                </div>
                <h2 className="text-medium text-base py-3">
                  <a
                    className="transition-all text-[#1e1e1e] hover:text-[#d43c18]"
                    href=""
                  >
                    Properly Elderly Care
                  </a>
                </h2>
                <p className="text-[#959595] text-[13px] pb-3">
                  Volunteering is generally considered an altruistic activity
                  and is intended to promote goodness or improve human quality
                  of life.
                </p>
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-[#1e1e1e]">
                    Donated
                  </h4>
                  <h4 className="text-sm font-medium text-[#1e1e1e]">67%</h4>
                </div>
                <Flex gap="small" vertical>
                  <Progress
                    percent={67}
                    showInfo={false}
                    strokeColor="#d43c18"
                    strokeLinecap="butt"
                    strokeWidth={4}
                  />
                </Flex>
                <p className="text-[#959595] text-[13px]">$750 to go</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="img-banner">
                  <div className="img-holder">
                    <img src="/image/cause-4.jpg" alt="" />
                    <SlWallet className="SlWallet" />
                  </div>
                </div>
                <h2 className="text-medium text-base py-3">
                  <a
                    className="transition-all text-[#1e1e1e] hover:text-[#d43c18]"
                    href=""
                  >
                    Special Education Opportunities
                  </a>
                </h2>
                <p className="text-[#959595] text-[13px] pb-3">
                  Volunteering is generally considered an altruistic activity
                  and is intended to promote goodness or improve human quality
                  of life.
                </p>
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-[#1e1e1e]">
                    Donated
                  </h4>
                  <h4 className="text-sm font-medium text-[#1e1e1e]">87%</h4>
                </div>
                <Flex gap="small" vertical>
                  <Progress
                    percent={87}
                    showInfo={false}
                    strokeColor="#d43c18"
                    strokeLinecap="butt"
                    strokeWidth={4}
                  />
                </Flex>
                <p className="text-[#959595] text-[13px]">$245 to go</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="img-banner">
                  <div className="img-holder">
                    <img src="/image/cause-5.jpg" alt="" />
                    <SlWallet className="SlWallet" />
                  </div>
                </div>
                <h2 className="text-medium text-base py-3">
                  <a
                    className="transition-all text-[#1e1e1e] hover:text-[#d43c18]"
                    href=""
                  >
                    Support Military Families
                  </a>
                </h2>
                <p className="text-[#959595] text-[13px] pb-3">
                  Volunteering is generally considered an altruistic activity
                  and is intended to promote goodness or improve human quality
                  of life.
                </p>
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-[#1e1e1e]">
                    Donated
                  </h4>
                  <h4 className="text-sm font-medium text-[#1e1e1e]">78%</h4>
                </div>
                <Flex gap="small" vertical>
                  <Progress
                    percent={78}
                    showInfo={false}
                    strokeColor="#d43c18"
                    strokeLinecap="butt"
                    strokeWidth={4}
                  />
                </Flex>
                <p className="text-[#959595] text-[13px]">$3300 to go</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="img-banner">
                  <div className="img-holder">
                    <img src="/image/cause-6.jpg" alt="" />
                    <SlWallet className="SlWallet" />
                  </div>
                </div>
                <h2 className="text-medium text-base py-3">
                  <a
                    className="transition-all text-[#1e1e1e] hover:text-[#d43c18]"
                    href=""
                  >
                    Child Protection Program
                  </a>
                </h2>
                <p className="text-[#959595] text-[13px] pb-3">
                  Volunteering is generally considered an altruistic activity
                  and is intended to promote goodness or improve human quality
                  of life.
                </p>
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-[#1e1e1e]">
                    Donated
                  </h4>
                  <h4 className="text-sm font-medium text-[#1e1e1e]">75%</h4>
                </div>
                <Flex gap="small" vertical>
                  <Progress
                    percent={75}
                    showInfo={false}
                    strokeColor="#d43c18"
                    strokeLinecap="butt"
                    strokeWidth={4}
                  />
                </Flex>
                <p className="text-[#959595] text-[13px]">$1800 to go</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="img-banner">
                  <div className="img-holder">
                    <img src="/image/cause-7.jpg" alt="" />
                    <SlWallet className="SlWallet" />
                  </div>
                </div>
                <h2 className="text-medium text-base py-3">
                  <a
                    className="transition-all text-[#1e1e1e] hover:text-[#d43c18]"
                    href=""
                  >
                    Jobs for Disabled People
                  </a>
                </h2>
                <p className="text-[#959595] text-[13px] pb-3">
                  Volunteering is generally considered an altruistic activity
                  and is intended to promote goodness or improve human quality
                  of life.
                </p>
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-[#1e1e1e]">
                    Donated
                  </h4>
                  <h4 className="text-sm font-medium text-[#1e1e1e]">55%</h4>
                </div>
                <Flex gap="small" vertical>
                  <Progress
                    percent={55}
                    showInfo={false}
                    strokeColor="#d43c18"
                    strokeLinecap="butt"
                    strokeWidth={4}
                  />
                </Flex>
                <p className="text-[#959595] text-[13px]">$6930 to go</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="img-banner">
                  <div className="img-holder">
                    <img src="/image/cause-8.jpg" alt="" />
                    <SlWallet className="SlWallet" />
                  </div>
                </div>
                <h2 className="text-medium text-base py-3">
                  <a
                    className="transition-all text-[#1e1e1e] hover:text-[#d43c18]"
                    href=""
                  >
                    Sponsor an Orphan Child
                  </a>
                </h2>
                <p className="text-[#959595] text-[13px] pb-3">
                  Volunteering is generally considered an altruistic activity
                  and is intended to promote goodness or improve human quality
                  of life.
                </p>
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-[#1e1e1e]">
                    Donated
                  </h4>
                  <h4 className="text-sm font-medium text-[#1e1e1e]">55%</h4>
                </div>
                <Flex gap="small" vertical>
                  <Progress
                    percent={55}
                    showInfo={false}
                    strokeColor="#d43c18"
                    strokeLinecap="butt"
                    strokeWidth={4}
                  />
                </Flex>
                <p className="text-[#959595] text-[13px]">$3525 to go</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CauseList;
