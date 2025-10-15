'use client'
import { IoSend } from "react-icons/io5";
export default function InputField({message , setMessage , sendMessageHandler}) {



  return (
    <>
      <div className="input-field flex items-center gap-2">
        <input value={message} onChange={e => setMessage(e.target.value)} type="text" className="w-[96%] bg-blue-50 rounded-md p-2 outline-none text-gray-800 caret-blue-500" placeholder="Write a message..." />
        <button onClick={sendMessageHandler} disabled={(message.trim() == '')} type="button" className={`w-10 h-10 p-1 rounded-full bg-blue-500 transition-all duration-300 ${message.trim() == '' ? 'cursor-default opacity-60' : 'cursor-pointer opacity-100'}  flex items-center justify-center`}>
          <IoSend className="text-blue-50 text-lg"/>
        </button>
      </div>
    </>
  );
}
