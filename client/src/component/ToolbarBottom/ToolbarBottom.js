import React from "react";
import "./ToolbarBottom.scss";
import Input from "../Input/Input";

const ToolbarBottom = () => (
  <div className="toolbar-bottom-container">
    <span>
      <i className="far fa-smile"></i>
    </span>
    <span>
      <Input placeholder="Write a message..."></Input>
    </span>
    <div className="right-icon">
      <span>
        <i className="fas fa-folder-plus"></i>
      </span>
      <span>
        <i className="far fa-paper-plane"></i>
      </span>
    </div>
  </div>
);
export default ToolbarBottom;
