import { Button, Heading, Input, Text } from "@chakra-ui/react"

export const WaitingRoom = ()  => {
    return (
    <form className="max-w-sm w-full bg-white p-8 rounded shadow-lg">
        <Heading>Online chat</Heading>
        <div className="mb-4">
            <Text fontSize={"sm"}>UserName</Text>
            <Input name="userName" placeholder="Enter your name" />
        </div>
    </form>)
}