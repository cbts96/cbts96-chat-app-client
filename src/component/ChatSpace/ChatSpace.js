import React, { Children } from "react";
import "./ChatSpace.scss";

import OneChat from "../OneChat/OneChat";
const ChatSpace = ({ users, name,message ,messages}) => {
  console.log(users);
  return (
    <div className="chat-space">
      
        
          <OneChat className="one-chat-space" message={message} users={users} name={name} messages={messages} >
            {Children}
          </OneChat>
        
      
    </div>
  );
};
export default ChatSpace;
