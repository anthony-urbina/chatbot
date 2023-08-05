import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { AgentProfile } from "../AgentProfile";
import { LoadingDots } from "../LoadingDots";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";

interface ChatModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ChatModal = ({ isOpen, setIsOpen }: ChatModalProps) => {
  return (
    <div
      className={`bg-white w-[375px] rounded-lg absolute right-6 bottom-6 h-[90dvh] ${
        isOpen ? "" : "hidden"
      }`}
    >
      <ModalHeader setIsOpen={setIsOpen} />
      <ModalBody />
    </div>
  );
};
