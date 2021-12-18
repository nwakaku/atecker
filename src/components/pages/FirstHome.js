import React from "react";
import HeaderOne from "../utils/HeaderOne";
import About from "../utils/About";
import Home from "../utils/Home";
import Service from "../utils/Service";
import Team from "../utils/Team";
import Contact from "../utils/Contact";
import Faq from "../utils/Faq";
import Footer from "../utils/Footer";
import OurWorks from "../utils/Ourworks";

// import config from "./configs/chatbotConfig";
// import MessageParser from "./chatbot/MessageParser";
// import ActionProvider from "./chatbot/ActionProvider";

const FirstHome = () => {
  return (
    <div>
      <HeaderOne />
      <Home />
      <About />
      <Service />
      <Team />
      <OurWorks />
      <Contact />
      <Faq />
      {/* <Chatbot
      /> */}
      <Footer />
    </div>
  );
};

export default FirstHome;
