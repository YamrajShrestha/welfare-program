import React from "react";
import { TbAward } from "react-icons/tb";
import { SlPeople, SlUserFollow } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Flex, Progress } from "antd";
import "../css/MESV.css";

const MESV = () => {
  return (
    <>
      <section className="mesv bg-[#f4f4f4] pb-12">
        <div className="container mx-auto px-44">
          <div className="flex gap-12">
            <div className="flex-1 mt-20 relative">
              <div className="icon-box bg-[#d43c18] h-[52px] w-[52px] flex justify-center items-center text-[24px] text-white rounded-full absolute top-[-26px] left-[50%] translate-x-[-50%]">
                <TbAward />
              </div>
              <div className="card bg-white text-center p-8">
                <h2 className="text-2xl font-medium text-[#1e1e1e] mt-8">
                  Mission
                </h2>
                <p className="text-[13px] text-[#959595] font-normal py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
                <button
                  type="submit"
                  className="bg-[#c4c4c4] text-white font-medium text-[15px] py-2.5 px-6 rounded-3xl hover:bg-[#d43c18] transition-all"
                >
                  Donate Now!
                </button>
              </div>
            </div>
            <div className="flex-1 mt-20 relative">
              <div className="icon-box bg-[#d43c18] h-[52px] w-[52px] flex justify-center items-center text-[24px] text-white rounded-full absolute top-[-26px] left-[50%] translate-x-[-50%]">
                <SlPeople />
              </div>
              <div className="card bg-white text-center p-8">
                <h2 className="text-2xl font-medium text-[#1e1e1e] mt-8">
                  Events
                </h2>
                <p className="text-[13px] text-[#959595] font-normal py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
                <button
                  type="submit"
                  className="bg-[#c4c4c4] text-white font-medium text-[15px] py-2.5 px-6 rounded-3xl hover:bg-[#d43c18] transition-all"
                >
                  Donate Now!
                </button>
              </div>
            </div>
            <div className="flex-1 mt-20 relative">
              <div className="icon-box bg-[#d43c18] h-[52px] w-[52px] flex justify-center items-center text-[24px] text-white rounded-full absolute top-[-26px] left-[50%] translate-x-[-50%]">
                <TfiHeadphoneAlt />
              </div>
              <div className="card bg-white text-center p-8">
                <h2 className="text-2xl font-medium text-[#1e1e1e] mt-8">
                  Support
                </h2>
                <p className="text-[13px] text-[#959595] font-normal py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
                <button
                  type="submit"
                  className="bg-[#c4c4c4] text-white font-medium text-[15px] py-2.5 px-6 rounded-3xl hover:bg-[#d43c18] transition-all"
                >
                  Donate Now!
                </button>
              </div>
            </div>
            <div className="flex-1 mt-20 relative">
              <div className="icon-box bg-[#d43c18] h-[52px] w-[52px] flex justify-center items-center text-[24px] text-white rounded-full absolute top-[-26px] left-[50%] translate-x-[-50%]">
                <SlUserFollow />
              </div>
              <div className="card bg-white text-center p-8">
                <h2 className="text-2xl font-medium text-[#1e1e1e] mt-8">
                  Volunteer
                </h2>
                <p className="text-[13px] text-[#959595] font-normal py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
                <button
                  type="submit"
                  className="bg-[#c4c4c4] text-white font-medium text-[15px] py-2.5 px-6 rounded-3xl hover:bg-[#d43c18] transition-all"
                >
                  Donate Now!
                </button>
              </div>
            </div>
          </div>
          <div className="flex bg-white mt-16 gap-10 items-center">
            <div className="">
              <img src="/image/orphan.jpg" alt="" />
            </div>
            <div className="pt-10">
              <h4 className="text-base text-[#959595] font-medium">
                $1945 To Go
              </h4>
              <p href="" className="font-medium text-[28px] text-[#1e1e1e]">
                Sponsor an Orphan Child
              </p>
              <p className="text-[13px] text-[#959595] py-6">
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life. In return, this activity can produce a feeling of
                self-worth and respect. There is no financial gain involved for
                the individual. Volunteering is also renowned for skill
                development, socialization, and fun.{" "}
              </p>
              <button
                type="submit"
                className="bg-[#D43C18] text-white font-bold text-[13px] py-1.5 px-4 rounded-3xl hover:bg-[#0F0F0F] transition-all"
              >
                Donate Now!
              </button>
            </div>
            <Flex gap="small" wrap="wrap" className="me-8">
              <Progress
                type="circle"
                percent={73}
                strokeColor="red"
                strokeWidth={3}
                size={160}
                format={() => (
                  <div className="text-[44px] font-light">
                    73%{" "}
                    <span className="block font-semibold text-sm text-[#959595] mt-2">
                      Donated
                    </span>
                  </div>
                )}
              />
            </Flex>
          </div>
        </div>
      </section>
    </>
  );
};

export default MESV;
