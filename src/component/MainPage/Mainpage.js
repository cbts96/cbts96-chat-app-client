import React,{useState,useEffect} from "react";
import ChatUtility from "../ChatUtility/ChatUtility";
import Chat from "../Chat/Chat";
import queryString from 'query-string';
import io from "socket.io-client";
import "./MainPage.scss";

let socket;
const MainPage = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  
  const [privateMess,setPrivateMess]=useState()
  const [privateChat,setPrivateChat]=useState(false);
  const ENDPOINT = "https://basic-chat-app-server.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  
  return (
    <div className="mainPage">
      
      <ChatUtility room={room}  users={users}/>
      <Chat room={room} privateChat={privateChat} users={users} sendMessage={sendMessage} name={name} message={message} setMessage={setMessage} messages={messages}  />
    </div>
  );
};
export default MainPage;
