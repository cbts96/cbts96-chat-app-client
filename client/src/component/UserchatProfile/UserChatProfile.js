import React from "react";
import "./UserChatProfile.scss";
import Friend from "../../images/friend.png";
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(frenchStrings)


const UserChatSpace = ({name}) => {

  return (
    <div className="user-chat-profile">
      <div className="online-left">
        <img src={Friend} className="img-friend-toolbar" alt="friend" />
        <div className="online-container">
  <div className="name">{name}</div>
          <TimeAgo className="time-from-now" formatter={formatter}date={Date.now()} />
        </div>
      </div>
    </div>
  );
};
export default UserChatSpace;
