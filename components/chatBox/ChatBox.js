import { TbTriangleFilled } from "react-icons/tb";
import System from "../system/System";
export default function ChatBox({username , content , isMine}){
    return(
        <>
           {username == 'system' ? <System content={content}/> : <div className={`chat-box relative rounded-lg ${isMine ? 'bg-blue-200 mr-auto' : 'bg-blue-400 ml-auto'} max-w-44 sm:max-w-52 h-auto py-1 px-2 m-3 flex flex-col `}>
                <p className="font-bold text-gray-900">{username}</p>
                <p className="text-sm text-gray-800 break-words whitespace-pre-wrap">{content}</p>
                <span className={`absolute -bottom-0.5 ${isMine ? 'text-blue-200' : 'text-blue-400'} -left-1`}> <TbTriangleFilled /></span>
            </div>}
        </>
    )
}