import React from "react";
import UserChatProfile from "../UserchatProfile/UserChatProfile";
import UserChatSpace from "../UserChatSpace/UserChatSpace";
import "./OneChat.scss";

const OneChat = ({name}) => {
  return (
    <div className="one-chat">
      <UserChatProfile name={name}/>
      <UserChatSpace />
    </div>
  );
};
export default OneChat;
