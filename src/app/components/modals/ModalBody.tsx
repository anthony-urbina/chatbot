import { LoadingDots } from "../LoadingDots";
import { MessageBlockList } from "../messages/MessageBlockList";

export const ModalBody = () => {
  return (
    <div className='overflow-y-auto bg-red-200 h-5/6'>
      <ul className='flex flex-col justify-end h-full bg-blue-400 gap-y-3'>
        <LoadingDots isLoading />
        <MessageBlockList />
      </ul>
    </div>
  );
};
