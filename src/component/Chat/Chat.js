import React from "react";
import "./Chat.scss";
import ToolBarTop from "../ToolbarTop/ToolBarTop";
import ChatSpace from "../ChatSpace/ChatSpace";
import ToolbarBottom from "../ToolbarBottom/ToolbarBottom";

const Chat = ({ room, users, name ,message,setMessage,sendMessage,messages,privateChat}) => {
    
  return (
    <div className="chat">
      <ToolBarTop room={room} privateChat={privateChat} />
      <ChatSpace users={users} name={name} message={message} messages={messages}/>
      <ToolbarBottom message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
};
export default Chat;
