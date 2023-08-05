"use client";

import { ChatBubbleIcon } from "./components/butttons/ChatBubbleButton";
import { useState } from "react";
import { ChatModal } from "./components/modals/ChatModal";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className=''>
      <ChatBubbleIcon onClick={() => setIsOpen(true)} />
      <ChatModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
