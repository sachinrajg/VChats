<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
=======
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);
<<<<<<< HEAD
  // In the component where you fetch or generate the messages
console.log("Messages:", messages); // Make sure 'messages' array is valid with 'timestamp' property in each message object
<Messages messages={messages} />

  return (
    <div className="messages">
      
=======

  console.log(messages)

  return (
    <div className="messages">
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
