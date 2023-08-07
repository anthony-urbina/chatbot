import { useChatContext } from "@/app/contexts/ChatContext";
import { MessageListItem } from "./MessageListItem";

interface Message {
  content: string;
  role: "user" | "mock-assistant";
  createdAt: Date;
}

const messages: Message[] = [
  { content: "Hey there, I'm Marty, your digital assistant!", role: "mock-assistant", createdAt: new Date() },
  {
    content:
      "How can I help you today? You can either pick a topic below, or type your answer into the message box.",
    role: "mock-assistant",
    createdAt: new Date(),
  },
];

export const MessageList = () => {
  const { step } = useChatContext();

  return (
    <ul className='flex flex-col justify-end h-full mx-2 gap-y-3'>
      {messages.map((message, index) => {
        if (index > step) return null;
        return (
          <MessageListItem key={index} isFromChatBot={message.role !== "user"} message={message.content} />
        );
      })}
      {/* <MessageListItem isFromChatBot={messages[step]?.role !== "user"} message={messages[step]?.content} /> */}
    </ul>
  );
};
