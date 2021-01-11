import React from "react";
//import UserChatProfile from "../UserchatProfile/UserChatProfile";
import UserChatSpace from "../UserChatSpace/UserChatSpace";
import "./OneChat.scss";

const OneChat = ({ name, users ,message,messages}) => {
  let result = users.map((a) => a.name);
  console.log(result);

  return (
    <div className="one-chat">
    
        <UserChatSpace message={message} messages={messages} name={name} />
    
      

    </div>
  );
};
export default OneChat;
