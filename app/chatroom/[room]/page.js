'use client'

import ChatBox from "@/components/chatBox/ChatBox";
import InputField from "@/components/inputField/InputField";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import { io } from "socket.io-client";

let socket;

export default function Room() {
  const [message, setMessage] = useState("");
  const { room } = useParams();
  const [chat, setChat] = useState([]);

  const sendMessageHandler = () => {
      const data = { room, message };
      socket.emit("send_message", data);
      setMessage("");
  };

//   useEffect(() => {
//     socket = io({
//       path: '/api/socket',
//     });

//     socket.on("connect", () => {
//       console.log("Connected to server:", socket.id);
//       socket.emit("join_room", room);
//     });

//     socket.on("receive_message", (data) => {
//       setChat((prev) => [...prev, data]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [room]);
  return (
    <>
      <div className="chat-app h-svh flex justify-center items-center bg-blue-200">
        <div className="container w-[500px]">
          <h1 className="text-gray-800 font-bold text-2xl flex items-center gap-2">
            Chat app <RiTelegram2Fill />
          </h1>
          <p className="room-id text-sm text-gray-700">Room: {room}</p>
          <div className="display p-3 scroll-smooth h-[70svh] overflow-y-scroll bg-blue-50 rounded-md my-8 scroll">
            <ChatBox />
            <ChatBox />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            possimus cum dolore delectus corporis recusandae eaque nihil cumque,
            fugit esse sapiente, itaque nisi provident, voluptatem doloremque
            non commodi nulla! Similique, nesciunt ipsum voluptatum suscipit
            molestias voluptatibus velit. Ratione iure sed quibusdam consequatur
            numquam beatae dicta a reprehenderit dolorem dolores, autem odit
            quis. Voluptatem cum dicta, repudiandae nostrum quod quisquam
            tempore blanditiis commodi eum adipisci, illum distinctio vero!
            Voluptates, voluptas ipsam illum nesciunt nam facilis iste
            perferendis amet facere a eaque harum odio iusto explicabo dolorem
            debitis iure cum! Dolorem laborum iste odio at reiciendis asperiores
            eveniet facilis explicabo, eaque iusto et, hic placeat culpa facere
            ipsam sequi fuga soluta! Magnam optio accusantium vitae maiores
            nisi. Quasi delectus libero esse eaque? Culpa numquam aspernatur
            repudiandae dicta corporis nihil distinctio veniam animi labore nemo
            ea deleniti deserunt repellat, dolorem, natus, qui delectus rerum
            est fugit porro magnam. Possimus libero soluta quod quas aperiam sit
            quasi, illum ducimus. Fugit aliquid sint ipsum eos aliquam? Corporis
            in aperiam exercitationem qui eligendi aliquam obcaecati quaerat
            mollitia rem ipsam, similique fugiat. Fugiat, similique nobis
            repellat itaque at iste molestiae mollitia tempora minus qui libero,
            obcaecati ratione consequuntur, accusamus autem quibusd
          </div>
          <InputField
            message={message}
            setMessage={setMessage}
            sendMessageHandler={sendMessageHandler}
          />
        </div>
      </div>
    </>
  );
}
