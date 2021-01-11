import React from "react";
import "./ChatUtility.scss";
import Input from "../Input/Input";

import ChatUtilityOnline from "../ChatUtilityOnline/ChatUtilityOnline";

const ChatUtility = ({room,name,users}) => {
 
  let result = users.map(a => a.name);
  //Object.values(result);
  


return (
  
  
  <div className="chat-utility">
    
    <div className="group">
      <div className="title">Chats</div>
      <div className="gorup-chat">
        <span>
          <i className="fas fa-user-friends"></i>
        </span>
        <span>
          <i className="fas fa-plus-circle"></i>
        </span>
      </div>
    </div>

    <div className="search-chat">
      <Input placeholder="Search Chats ....." ChatUtility />
    </div>
  {
     
        result.map((key,value)=>{
          return room? (<ChatUtilityOnline key={key} name={key} />):null
        })
          
   }
   
  </div>

)
};
export default ChatUtility;
