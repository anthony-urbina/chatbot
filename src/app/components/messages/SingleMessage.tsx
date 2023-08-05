interface SingleMessageProps {
  isFromChatBot: boolean;
  message: string;
}

export const SingleMessage = ({ isFromChatBot, message }: SingleMessageProps) => {
  return (
    <div
      className={`rounded-md p-1 break-keep max-w-[81%] ${
        isFromChatBot ? "bg-gray-200 text-black" : "bg-black text-white"
      }`}
    >
      {message}
    </div>
  );
};
