import React from "react";
import { Link } from "react-router-dom";
import ShortInfo from "./ShortInfo";

const EventList = () => {
  return (
    <>
      <section className="event-list bg-[#f4f4f4]">
        <div className="container mx-auto px-44">
          <div className="flex py-14">
            <div className="flex-1">
              <h2 className="font-bold text-2xl text-[#1e1e1e] mb-10">
                Events List
              </h2>
              <div className="flex gap-4 mb-3">
                <span className="text-[11px] text-[#959595]">
                  APR <h4 className="text-2xl font-bold text-[#1e1e1e]">14</h4>
                </span>
                <span className="text-[11px] text-[#959595]">
                  April 14, 2025 / 8:00 am - April 18, 2025 / 5:00 pm
                  <Link
                    to=""
                    className="text-lg font-medium text-[#1e1e1e] block"
                  >
                    Initial Volunteer Briefing
                  </Link>
                </span>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="text-[11px] text-[#959595]">
                  MAY <h4 className="text-2xl font-bold text-[#1e1e1e]">16</h4>
                </span>
                <span className="text-[11px] text-[#959595]">
                  May 16, 2025 / 8:00 am - May 19, 2025 / 5:00 pm
                  <Link
                    to=""
                    className="text-lg font-medium text-[#1e1e1e] block"
                  >
                    Workshop by Bob Doe
                  </Link>
                </span>
              </div>
              <div className="flex gap-4 mb-3">
                <span className="text-[11px] text-[#959595]">
                  JUN <h4 className="text-2xl font-bold text-[#1e1e1e]">11</h4>
                </span>
                <span className="text-[11px] text-[#959595]">
                  une 11, 2025 / 8:00 pm - June 14, 2025 / 8:00 pm
                  <Link
                    to=""
                    className="text-lg font-medium text-[#1e1e1e] block"
                  >
                    Annual Charity Dinner
                  </Link>
                </span>
              </div>
              <Link className="text-[13px]" to="">
                View Calendar
              </Link>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-2xl text-[#1e1e1e] mb-8">
                Short Information
              </h2>
              <ShortInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventList;
