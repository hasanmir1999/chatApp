export default function System({content}){
    return(
        <>
            <span className="system-message mx-auto flex justify-center items-center m-3 rounded-full bg-gray-700/50 p-1 max-w-[100px]">
                <p className="text-center text-gray-900 text-sm">{content}</p>
            </span>
        </>
    )
}