import { WaitingRoom } from "./components/WaitingRoom";
import {HubConnectionBuilder} from "@microsoft/signalr";
import {useState} from "react";
import {Chat} from "./components/Chat";

function App() {
    const [connection, setConnection] = useState(null)
    const [chatRoomName, setChatRoomName] = useState("")
    const [messages, setMessages] = useState([])

    const joinChat = async (userName, chatRoomName) => {
        var connection = new HubConnectionBuilder()
            .withUrl("http://localhost:5024/chat")
            .withAutomaticReconnect()
            .build();

        connection.on("ReceiveMessage", (userName, message) => {
            setMessages((messages) => [...messages, {userName, message}]);
        })

        try {
            await connection.start();
            await connection.invoke("JoinChat", {userName, chatRoomName});
            setConnection(connection);
            setChatRoomName(chatRoomName);
        }catch (error){
            console.log(error)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-grey-100">
            {connection ? (
                <Chat messages={messages} chatRoomName={chatRoomName}/>
            ) : (
                <WaitingRoom joinChat={joinChat}/>
            )}
        </div>
  );
}

export default App;
