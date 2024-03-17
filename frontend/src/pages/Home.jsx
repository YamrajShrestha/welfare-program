import React from "react";
import Hero from "../components/Hero";
import MESV from "../components/MESV";
import CauseList from "../components/CauseList";
import EventList from "../components/EventList";
import Poorboy from "../components/Poorboy";
import LatestNews from "../components/LatestNews";
import OurDonators from "../components/OurDonators";

const Home = () => {
  return (
    <>
      <Hero />
      <MESV />
      <CauseList />
      <EventList />
      <Poorboy />
      <LatestNews />
      <OurDonators />
    </>
  );
};

export default Home;
