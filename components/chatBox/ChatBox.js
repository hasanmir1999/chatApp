import { TbTriangleFilled } from "react-icons/tb";

export default function ChatBox(){
    return(
        <>
            <div className="chat-box relative rounded-lg bg-blue-200 w-32 h-10 bg-blue-40 text-gray-800 py-1 px-2 text-sm m-3">
                hello world
                <span className="absolute -bottom-0.5 text-blue-200 text-blue-40 -left-1"> <TbTriangleFilled /></span>
            </div>
        </>
    )
}