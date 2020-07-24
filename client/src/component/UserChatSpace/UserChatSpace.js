import React from "react";
import "./UserChatSpace.scss";

const UserChatSpace=({chooseUser})=>(
    <div className="user-chat-space">
        <span className={`${chooseUser?"your-chat-content":"other-chat-content"}`}>Test 1 2 3</span>
    </div>
)
export default UserChatSpace;