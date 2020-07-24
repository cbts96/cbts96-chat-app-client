import React from "react";
import UserChatProfile from "../UserchatProfile/UserChatProfile";
import UserChatSpace from "../UserChatSpace/UserChatSpace";
import "./OneChat.scss";

const OneChat = () => {
  return (
    <div className="one-chat">
      <UserChatProfile />
      <UserChatSpace />
    </div>
  );
};
export default OneChat;
