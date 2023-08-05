import { AgentProfile } from "../AgentProfile";
import { SingleMessage } from "./SingleMessage";

export const MessageBlockListItem = () => {
  return (
    <li>
      <div className='flex gap-x-2'>
        <div className='self-end'>
          <AgentProfile pfpOnly />
        </div>
        <div>
          <SingleMessage message="Hi recipientName, I'm Marty, your digital assistant!" isFromChatBot />
        </div>
      </div>
    </li>
  );
};
