import React from 'react'
import { Flex, Progress } from "antd";

const FeaturedCampaign = () => {
  return (
    <>
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
    </>
  )
}

export default FeaturedCampaign