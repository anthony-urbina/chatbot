"use client";

import { ChatBubbleIcon } from "./components/butttons/ChatBubbleButton";
import { useState } from "react";
import { ChatModal } from "./components/modal/ChatModal";
import { ChatWrapper } from "./contexts/ChatContext";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className=''>
      <ChatWrapper>
        <ChatBubbleIcon onClick={() => setIsOpen(true)} />
        <ChatModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </ChatWrapper>
    </div>
  );
}
