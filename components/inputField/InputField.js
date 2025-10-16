"use client";
import { IoSend } from "react-icons/io5";
export default function InputField({
  message,
  setMessage,
  sendMessageHandler,
}) {
  return (
    <>
      <div className="input-field flex gap-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          placeholder="Write a message..."
          className="w-[96%] resize-none bg-blue-50 rounded-md p-2 outline-none text-gray-800 caret-blue-500 overflow-hidden"
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`; 
          }}
        />

        <button
          onClick={sendMessageHandler}
          disabled={message.trim() == ""}
          type="button"
          className={`sm:w-10 sm:h-10 w-9 h-9 p-1 rounded-full bg-blue-500 transition-all duration-300 flex items-center justify-center ${
            message.trim() == ""
              ? "cursor-default opacity-60"
              : "cursor-pointer opacity-100"
          }`}
        >
          <IoSend className="text-blue-50 sm:text-lg text-base" />
        </button>
      </div>
    </>
  );
}
