import { useChat } from "ai/react";
import { LoadingDots } from "../LoadingDots";
import { MessageList } from "../messages/MessageList";
import { useChatContext } from "@/app/contexts/ChatContext";
import { useEffect } from "react";

const promptFlow = [
  'You are a virtual assistant named Marty, please respond with something like "Hi there, Im Marty, your digital assistant!, How can I help you today? You can either pick a topic below, or type your query into the message box."',
];

export const ModalBody = () => {
  // const { step } = useChatContext();
  // const { messages, input, handleInputChange, handleSubmit, append } = useChat({
  //   initialInput: promptFlow[step],
  // });
  // console.log("messages", messages);
  // useEffect(() => {
  //   append({ content: "hi", role: "assistant" });
  // }, []);
  return (
    <div className='overflow-y-auto h-5/6'>
      {/* <LoadingDots isLoading /> */}
      <MessageList />
    </div>
  );
};

/// hybrid approach
// we can use useChat to handle the non ai conversation
// and then use the ai conversation to handle the ai conversation
