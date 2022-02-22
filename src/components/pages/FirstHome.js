import React, { useState } from "react";
import HeaderOne from "../utils/HeaderOne";
import About from "../utils/About";
import Home from "../utils/Home";
import Service from "../utils/Service";
import Team from "../utils/Team";
import Contact from "../utils/Contact";
import Faq from "../utils/Faq";
import Footer from "../utils/Footer";
import NewWorks from "../utils/NewWorks";
import UtilPricing from "../utils/UtilPricing";

import config from "../../chatbot/config.js";
import MessageParser from "../../chatbot/MessageParser.js";
import ActionProvider from "../../chatbot/ActionProvider.js";
import Chatbot from "react-chatbot-kit";

const Chat = () => {
  const [dat, setDat] = useState(true);

  return (
    <>
      <div className="chatbot">
        <div className="arrow" onClick={() => setDat(!dat)}></div>{" "}
        <div className={dat ? "mains" : "mainy"}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </>
  );
};

const FirstHome = () => {
  return (
    <div>
      <HeaderOne />
      <Home />
      <About />
      <Service />
      <Team />
      <NewWorks />
      <UtilPricing />
      <Contact />
      <Faq />

      <Footer />
      <Chat />
    </div>
  );
};

export default FirstHome;
