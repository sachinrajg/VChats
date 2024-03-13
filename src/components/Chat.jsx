<<<<<<< HEAD
// Chat.jsx
=======
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
<<<<<<< HEAD
import { ChatContext } from "../context/ChatContext";
import Messages from "./Messages";
import Input from "./Input";

=======
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
