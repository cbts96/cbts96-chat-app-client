import React, { Children } from "react";
import "./ChatSpace.scss";

import OneChat from "../OneChat/OneChat";
const ChatSpace = ({ users, name }) => {
  
  return (
    <div className="chat-space">
      {users.map((key, value) => {
        return (
          <OneChat key={value} className="one-chat-space" name={name}>
            {Children}
          </OneChat>
        );
      })}
    </div>
  );
};
export default ChatSpace;
