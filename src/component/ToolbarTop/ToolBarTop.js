import React from "react";
import "./ToolBarTop.scss";
import Friend from "../../images/friend.png";
import Vcall from "../../images/vcall.png";

import { withRouter } from "react-router-dom";

const ToolBarTop = ({ history, room,name,privateChat }) => (
  <div className="toolbar-top">
    <div className="online-left">
      <img src={Friend} className="img-friend-toolbar" alt="friend" />
      <div className="online-container">
        <div className="name">Le Thang</div>
        <div className="writing">writting...</div>
      </div>
    </div>
<div className="room-name">{privateChat?`You are chatting with: ${name}`:(`Your Current Room is: ${room}`)}</div>
    <div className="toolbar">
      <span>
        <i className="fas fa-phone-alt call"></i>
      </span>
      <span>
        <img src={Vcall} className="vcall" alt="vcall" />
      </span>
      <button className="log-out" onClick={() => history.push(`/`)}>
        Log Out
      </button>
    </div>
  </div>
);
export default withRouter(ToolBarTop);
