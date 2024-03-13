import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom/client";
=======
import ReactDOM from "react-dom";
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
=======
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
);
