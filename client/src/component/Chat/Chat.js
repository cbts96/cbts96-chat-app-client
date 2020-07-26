import React from "react";
import "./Chat.scss"
import ToolBarTop from "../ToolbarTop/ToolBarTop";
import ChatSpace from "../ChatSpace/ChatSpace";
import ToolbarBottom from "../ToolbarBottom/ToolbarBottom";


const Chat=({room,users,name})=>(
    <div className="chat">
        <ToolBarTop room={room} />
        <ChatSpace users={users} name={name}/>
        <ToolbarBottom />
    </div>
)
export default Chat;