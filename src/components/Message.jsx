import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

<<<<<<< HEAD
  const getMessageTime = (timestamp) => {
    if (!timestamp) {
      return "Invalid Time";
    }

    // Check if the timestamp needs conversion to milliseconds
    const timestampInMillis = timestamp < 1e12 ? timestamp * 1000 : timestamp;

    if (isNaN(timestampInMillis)) {
      return "Invalid Time";
    }

    const messageDate = new Date(timestampInMillis);
    const hours = messageDate.getHours();
    const minutes = messageDate.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };

=======
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
<<<<<<< HEAD
        <span>{getMessageTime(message.date)}</span>
=======
        <span>just now</span>
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
