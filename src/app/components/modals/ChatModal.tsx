import { Dialog } from "@headlessui/react";
import { useState } from "react";

interface ChatModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ChatModal = ({ isOpen, setIsOpen }: ChatModalProps) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={""}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will be permanently removed. This
          action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};
