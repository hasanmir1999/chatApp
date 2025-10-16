"use client";

import ChatBox from "@/components/chatBox/ChatBox";
import InputField from "@/components/inputField/InputField";
import System from "@/components/system/System";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import { io } from "socket.io-client";

let socket;

export default function Room() {
  const [message, setMessage] = useState("");
  const { room, username } = useParams();
  const [chat, setChat] = useState([]);

  const sendMessageHandler = () => {
    if (!message.trim()) return;
    socket.emit("message", {
      room_id: Number(room),
      username,
      content: message,
    });
    setChat((prev) => [...prev, { username, content: message }]);
    setMessage("");
  };

  useEffect(() => {
    socket = io("http://localhost:8000", { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
      socket.emit("join", {
        username,
        room_id: Number(room),
      });
    });

    socket.on("history", (data) => {
      // بک اند پیام‌های قبلی و کاربران رو می‌فرسته
      setChat(data.messages || []);
    });

    socket.on("system", (msg) => {
      setChat((prev) => [
        ...prev,
        { username: "system", content: msg.message },
      ]);
    });

    socket.on("message", (m) => {
      // فقط پیام‌هایی که از دیگران میاد
      if (m.username === username) return;
      setChat((prev) => [...prev, m]);
    });

    return () => {
      socket.disconnect();
    };
  }, [room]);

  return (
    <div className="chat-app min-h-svh flex justify-center items-center bg-blue-200 p-5">
      <div className="container sm:w-[500px] w-[400px]">
        <h1 className="text-gray-800 font-bold text-2xl flex items-center gap-2">
          Chat app <RiTelegram2Fill />
        </h1>
        <div
          className={`display h-[70svh] overflow-y-auto bg-blue-50 rounded-md sm:my-8 my-5 scroll`}
        >
          <ChatBox key={1} username={"asdasdasd"} content={"dddd"} isMine={1} />
          <ChatBox
            key={1}
            username={"asdasdasd"}
            content={"dddd"}
            isMine={1}
          />{" "}
          <ChatBox key={1} username={"asdasdasd"} content={"dddd"} isMine={1} />
          <System content={"sdfsdfsd"} />
          <ChatBox key={1} username={"asdasdasd"} content={"dddd"} isMine={1} />
          <System content={"sdfsdfsd"} />
          <System content={"sdfsdfsd"} />
          {chat.map((msg, i) => (
            <ChatBox
              key={i}
              username={msg.username}
              content={msg.content}
              isMine={msg.username === username}
            />
          ))}
        </div>
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessageHandler={sendMessageHandler}
        />
      </div>
    </div>
  );
}
