import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.scss";
// import Friend from "../../images/friend.png";
// import TimeAgo from "react-timeago";
// import frenchStrings from "react-timeago/lib/language-strings/en";
// import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import UserChatProfile from "../UserchatProfile/UserChatProfile";
//const formatter = buildFormatter(frenchStrings);
const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <div className="container">
      {isSentByCurrentUser ? (
        <div className="current-chatting">
          <UserChatProfile name={name} />
          <div className="big-mess">
            <div
              className={`${user === "admin" ? "admin-left" : "mess-normal"}`}
            ></div>
            <div className="current-user">
              <div className="color-white">{ReactEmoji.emojify(text)}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="message-container">
          
          <p className={`${user === "admin" ? "admin" : "name"}`}>{user}</p>
          <div className="other-user">
            <div className="color-white">{ReactEmoji.emojify(text)}</div>
            {/* <p className="sentText pl-10 ">{user}</p> */}
          </div>
        </div>
      )}
    </div>
  );
};
export default Message;
