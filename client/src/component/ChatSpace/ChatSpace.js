import React, { Children } from "react";
import "./ChatSpace.scss";

import OneChat from "../OneChat/OneChat";
const ChatSpace = () => (
  <div className="chat-space">
    <OneChat className="one-chat-space">
    
     {Children}
    
    </OneChat>
    <OneChat className="one-chat-space">
    
     {Children}
    
    </OneChat>
  </div>
);
export default ChatSpace;
