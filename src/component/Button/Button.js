import React from "react";
import "./Button.scss";

const Button = ({ children,MinButton }) =>
 <button className={`${MinButton?"min-button":"button"}`}>{children}</button>;
export default Button;
