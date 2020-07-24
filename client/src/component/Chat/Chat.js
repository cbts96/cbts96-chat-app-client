import React from "react";
import "./Chat.scss"
import ToolBarTop from "../ToolbarTop/ToolBarTop";
import ChatSpace from "../ChatSpace/ChatSpace";
import ToolbarBottom from "../ToolbarBottom/ToolbarBottom";


const Chat=()=>(
    <div className="chat">
        <ToolBarTop />
        <ChatSpace />
        <ToolbarBottom />
    </div>
)
export default Chat;