import React, { useState } from "react";
import "./Login.scss";
import Input from "../Input/Input";

 //import queryString from "query-string";
// import io from "socket.io-client";
import { withRouter, Link } from "react-router-dom";

//let socket;
const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  

  return (
    <div className="login-warapper">
      <div className="login-div">
        <div className="login-title">Login</div>
        <div className="line"></div>
        <div className="man"></div>
        <div className="input-warapper">
          <form className="form-signin" type="submit">
            <Input
              label="Nick Name"
              // onChange={({ target: { value } }) => setMessage(value)}
              type="text" onChange={(event) => setName(event.target.value)}
              name={"Nick"}
              // onKeyPress={(event) =>
              //   event.key === "Enter" ? sendMessage(event) : null
              // }
              InputLogin
            />
            <Input label="Room Name" name={"RoomName"} InputLogin type="text" onChange={(event) => setRoom(event.target.value)} />
            
          </form>
          <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/main-page?name=${name}&room=${room}`}
            >
              <button className="button" >
                Sign In
              </button>
            </Link>
        </div>

        <span className="contact-admin">
          * Contact Admin if you have an any error! *
        </span>
      </div>
    </div>
  );
};
export default withRouter(Login);

