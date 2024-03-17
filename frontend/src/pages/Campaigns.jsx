import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { LiaAwardSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SlUserFollow, SlPeople, SlWallet, SlBulb } from "react-icons/sl";
import { Flex, Progress } from "antd";
import "../css/CauseList.css";
import FeaturedCampaign from "../components/FeaturedCampaign";
import Donators from "../components/Donators";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Campaigns = () => {
  return (
    <>
      <div className="bg-[#d43c18] py-5">
        <div className="container mx-auto px-44">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="white" href="/">
                Home
              </Link>
              <Typography color="text.primary">Campaigns</Typography>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <section className="campaigns bg-[#f4f4f4]">
        <div className="container mx-auto px-44 py-16">
          <div className="text-center">
            <h2 className="text-[28px] font-medium leading-[40px]">
              Why You Can Trust Us
            </h2>
            <p className="text-base font-light">
              With Welfare Program your money go straight to the goal
            </p>
          </div>
          <div className="grid grid-cols-3 pt-12 gap-10">
            <div className="flex gap-10">
            <LiaAwardSolid color="#d43c18" size={70}/>
              <span>
                <h4 className="text-2xl font-medium">Mission</h4>
                <p className="text-[13px] leading-[20px] text-[#959595] py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
              </span>
            </div>
            <div className="flex gap-10">
              <TfiHeadphoneAlt color="#d43c18" size={60} />
              <span>
                <h4 className="text-2xl font-medium">Support</h4>
                <p className="text-[13px] leading-[20px] text-[#959595] py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
              </span>
            </div>
            <div className="flex gap-10">
              <SlUserFollow color="#d43c18" size={60} />
              <span>
                <h4 className="text-2xl font-medium">Volunteer</h4>
                <p className="text-[13px] leading-[20px] text-[#959595] py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
              </span>
            </div>
            <div className="flex gap-10">
              <SlPeople color="#d43c18" size={60} />
              <span>
                <h4 className="text-2xl font-medium">Events</h4>
                <p className="text-[13px] leading-[20px] text-[#959595] py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
              </span>
            </div>
            <div className="flex gap-10">
              <SlWallet color="#d43c18" size={60} />
              <span>
                <h4 className="text-2xl font-medium">Donations</h4>
                <p className="text-[13px] leading-[20px] text-[#959595] py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
              </span>
            </div>
            <div className="flex gap-10">
              <SlBulb color="#d43c18" size={60} />
              <span>
                <h4 className="text-2xl font-medium">Solutions</h4>
                <p className="text-[13px] leading-[20px] text-[#959595] py-6">
                  Accusantium quam, ultricies eget tempor id, aliquam eget nibh
                  et. Maecen aliquam, risus at semper ullamcorper, magna
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="cause-donate bg-white">
        <div className="container mx-auto px-44 py-16">
          <h2 className="text-center font-medium text-[28px]">
            Choose Your Cause & Donate
          </h2>
          <div className="grid grid-cols-4 gap-10 pt-8">
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
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-[#1e1e1e]">Donated</h4>
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
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-[#1e1e1e]">Donated</h4>
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
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-[#1e1e1e]">Donated</h4>
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
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-[#1e1e1e]">Donated</h4>
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
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-[#1e1e1e]">Donated</h4>
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
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-[#1e1e1e]">Donated</h4>
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
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-[#1e1e1e]">Donated</h4>
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
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm font-medium text-[#1e1e1e]">Donated</h4>
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
          </div>
        </div>
      </section>
      <section className="featured-campaign bg-[#e1e1e1]">
        <div className="container mx-auto px-44 py-16">
          <h2 className="font-medium text-[28px] text-center">
            Featured Campaign
          </h2>
          <FeaturedCampaign />
        </div>
      </section>
      <section className="latest-donators bg-white">
        <div className="container mx-auto px-44 py-16">
          <h2 className="font-medium text-center text-[28px] mb-8">
            Latest Donators
          </h2>
          <Donators />
        </div>
      </section>
    </>
  );
};

export default Campaigns;
