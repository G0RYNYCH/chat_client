import { Button, Heading, Input, Text } from "@chakra-ui/react"
import {useState} from "react";

export const WaitingRoom = ({ joinChat })  => {
    const [userName, setUserName] = useState();
    const [chatRoomName, setChatRoomName] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        joinChat(userName, chatRoomName);
    };

    return (
        <form onSubmit={onSubmit} className="max-w-sm w-full bg-white p-8 rounded shadow-lg">
            <Heading>Online chat</Heading>
            <div className="mb-4">
                <Text fontSize={"sm"}>User name</Text>
                <Input
                    onChange={(e) => setUserName(e.target.value)}
                    name="userName"
                    placeholder="Enter your name"/>
            </div>
            <div className="mb-4">
                <Text fontSize={"sm"}>Chat room</Text>
                <Input
                    onChange={(e) => setChatRoomName(e.target.value)}
                    name="chatName"
                    placeholder="Enter chat room name"/>
            </div>
            <Button type={"submit"} colorScheme={"blue"}>
                Join
            </Button>
        </form>)
}