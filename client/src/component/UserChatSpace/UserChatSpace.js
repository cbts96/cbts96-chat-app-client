import React from "react";
import "./UserChatSpace.scss";
import Message from "../Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
const UserChatSpace = ({ chooseUser, messages, name }) => {
    console.log(messages);
  return (
    <div className="user-chat-space">
      <ScrollToBottom className="messages">
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollToBottom>
    </div>
  );
};
export default UserChatSpace;
