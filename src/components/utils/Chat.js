import React, { useState } from "react";

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

export default Chat;
