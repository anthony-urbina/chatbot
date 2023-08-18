import { useChatContext } from "@/app/contexts/ChatContext";
import { MessageListItem } from "./MessageListItem";
import { useEffect, useState } from "react";

interface Message {
  content: string;
  // role: "user" | "chatbot";
  // createdAt: Date;
  type: "text" | "choice";
}

const greetingMessages: Message[] = [
  { type: "text", content: "Hey there, I'm Marty, your digital assistant!" },
  {
    type: "text",
    content:
      "How can I help you today? You can either pick a topic below, or type your query into the message box.",
  },
];

const greetingOptions = [
  {
    type: "choice",
    options: ["NFT Minting", "Smart Contracts", "DeFi Solutions", "Security Audits", "About us"],
  },
];

const script = [
  {
    type: "block",
    role: "chatbot",
    content: [...greetingMessages, ...greetingOptions],
  },
  // ... more steps here ...
];

export const MessageList = () => {
  const { step: chatStep } = useChatContext();

  return (
    <ul className='flex flex-col justify-end h-full mx-2 gap-y-3'>
      {script.map((step, idx) => {
        if (step.type === "block") {
          return (
            <>
              {step.content.map((item, idx) => {
                if (idx > chatStep) return null;
                if (item.type === "text") {
                  return (
                    <MessageListItem key={idx} isFromChatBot={step.role !== "user"} message={item.content} />
                  );
                } else if (item.type === "choice") {
                  return <MultipleChoiceList key={idx} optionsList={item.options} />;
                }
              })}
            </>
          );
        }
        return null;
      })}
    </ul>
  );
};

interface MultipleChoiceListProps {
  optionsList: string[];
}

const MultipleChoiceList = ({ optionsList }: MultipleChoiceListProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, 500);
  }, []);

  return (
    <ul
      className={`flex flex-wrap gap-2 transition-opacity duration-75 ${
        isHidden ? "opacity-0" : "opacity-100"
      }`}
    >
      {optionsList.map((option, idx) => {
        return <MultipleChoiceListItem key={idx} option={option} />;
      })}
    </ul>
  );
};

interface MultipleChoiceListItemProps {
  option: string;
}

const MultipleChoiceListItem = ({ option }: MultipleChoiceListItemProps) => {
  return (
    <button className='p-3 text-sm font-medium text-black transition-colors duration-100 border border-gray-400 rounded-md hover:border-black w-fit'>
      {option}
    </button>
  );
};
