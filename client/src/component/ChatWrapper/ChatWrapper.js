import React from "react";



// const [name, setName] = useState("");
  // const [room, setRoom] = useState("");
  // const [users, setUsers] = useState("");
  // const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState([]);
  // const ENDPOINT = "http://localhost:5000/";

  // useEffect(() => {
  //   const { name, room } = queryString.parse(location.search);

  //   socket = io(ENDPOINT);

  //   setRoom(room);
  //   setName(name);

  //   socket.emit("join", { name, room }, (error) => {
  //     if (error) {
  //       alert(error);
  //     }
  //   });
  // }, [ENDPOINT, location.search]);

  // useEffect(() => {
  //   socket.on("message", (message) => {
  //     setMessages((messages) => [...messages, message]);
  //   });

  //   socket.on("roomData", ({ users }) => {
  //     setUsers(users);
  //   });
  // }, []);

  // const sendMessage = (event) => {
  //   event.preventDefault();

  //   if (message) {
  //     socket.emit("sendMessage", message, () => setMessage(""));
  //   }
  //};
  // console.log(location)