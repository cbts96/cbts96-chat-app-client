import React from "react";
import "./ToolbarBottom.scss";
import Input from "../Input/Input";

const ToolbarBottom = ({ message, setMessage,sendMessage }) => (
  <div className="toolbar-bottom-container">
    <span>
      <i className="far fa-smile"></i>
    </span>
    <span>
      <Input
        placeholder="Write a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      ></Input>
    </span>
    <div className="right-icon">
      <span>
        <i className="fas fa-folder-plus"></i>
      </span>
      <span>
        <i className="far fa-paper-plane" onClick={e => sendMessage(e)}></i>
      </span>
    </div>
  </div>
);
export default ToolbarBottom;
