import React from "react";
import "./ChatUtilityOnline.scss";
import Friend from "../../images/friend.png";
import Online from "../../images/online.png";

const ChatUtilityOnline=({name})=>(
    <div className="friend">
    <div className="friend-container">
        <img src={Friend} className="img-friend" alt="friend"/>
        <div className="name">{name}</div>
        <img src={Online} className="online" alt="online"/>
        <div className="count">0</div>
    </div>
</div>
)
export default ChatUtilityOnline;