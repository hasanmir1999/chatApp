"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState('')
  const enterRoomHandler = () => {
    if (roomId.trim() == '' || userName.trim() == '') {
      toast.error('please fill in all fields.')
      return
    }
    router.push(`/chatroom/${userName}/${roomId}`);
    setRoomId("");
    setUserName("");
  };
  return (
    <>
      <div className="home flex justify-center items-center h-svh bg-blue-200">
        <div className="enter-room w-[500px] bg-blue-50 rounded-md p-5">
          <h1 className="text-xl text-gray-800 font-bold">
            Enter your room number & username:
          </h1>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="username..."
            className="bg-blue-200 mt-5 p-2 rounded-md outline-none text-gray-800 w-full"
          />
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            type="text"
            placeholder="roomID..."
            className="bg-blue-200 mt-5 p-2 rounded-md outline-none text-gray-800 w-full"
          />
          <button
            type="button"
            onClick={enterRoomHandler}
            className="p-2 rounded-md bg-blue-400 text-white mt-3 cursor-pointer"
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}
