import { ButtonHTMLAttributes } from "react";

interface ChatBubbleIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // you can define additional properties here, if any
}

export const ChatBubbleIcon = ({ ...props }: ChatBubbleIconProps) => {
  return (
    <button
      className='fixed flex items-center justify-center p-4 pb-3 bg-white rounded-full bottom-6 right-6'
      {...props}
    >
      <i className='text-5xl ri-message-2-line text-primary' />
    </button>
  );
};
