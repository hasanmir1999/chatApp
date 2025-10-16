import { TbTriangleFilled } from "react-icons/tb";

export default function ChatBox({username , content , isMine}){
    return(
        <>
            <div className={`chat-box relative rounded-lg ${isMine ? 'bg-blue-200 mr-auto' : 'bg-blue-400 ml-auto'} w-32 h-10 py-1 px-2 m-3`}>
                <p className="font-bold text-gray-900">{username}</p>
                <p className="text-sm text-gray-800">{content}</p>
                <span className={`absolute -bottom-0.5 ${isMine ? 'text-blue-200' : 'text-blue-400'} -left-1`}> <TbTriangleFilled /></span>
            </div>
        </>
    )
}