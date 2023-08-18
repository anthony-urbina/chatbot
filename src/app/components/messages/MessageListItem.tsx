import { use, useEffect, useState } from "react";
import { AgentProfile } from "../AgentProfile";
import { LoadingDots } from "../LoadingDots";
import { useChatContext } from "@/app/contexts/ChatContext";

interface MessageListItemProps {
  isFromChatBot: boolean;
  message: string;
}

export const MessageListItem = ({ isFromChatBot, message }: MessageListItemProps) => {
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const { increaseStep } = useChatContext();

  useEffect(() => {
    console.log("hi");
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      increaseStep();
    }, 2000);
  }, []);

  return (
    <div className='flex gap-x-2'>
      <div className='self-end'>
        <AgentProfile pfpOnly />
      </div>
      {isThinking ? (
        <div className='flex items-center pb-1'>
          <LoadingDots isLoading />
        </div>
      ) : (
        <MessageBlock isFromChatBot={isFromChatBot} message={message} />
      )}
    </div>
  );
};

interface MessageBlockProps {
  isFromChatBot: boolean;
  message: string;
}

const MessageBlock = ({ isFromChatBot, message }: MessageBlockProps) => {
  return (
    <div
      className={`rounded-md p-1.5 break-keep max-w-[81%] ${
        isFromChatBot ? "bg-gray-200 text-black" : "bg-black text-white"
      }`}
    >
      {message}
    </div>
  );
};
