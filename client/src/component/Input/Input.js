import React from "react";
import "./Input.scss";
const Input=({label,placeholder,ChatUtility,InputLogin,onChange,value})=>(
    <div className="wrapper">
        <input className={`${ChatUtility?"ChatUtility":"input"} ${InputLogin?"input-login":""}`} placeholder={placeholder} onChange={onChange}  />
        <label className="label">{label}</label>
    </div>
)
export default Input;