export const Message = ({messageInfo}) => {
    return(
        <div className="w-fit">
            <span className="text-s text-slate-600">{messageInfo.userName}</span>
            <div className="p-2 bg-gray-100 rounded-lg shadow-md">
                {messageInfo.message}
            </div>
        </div>
    )
}