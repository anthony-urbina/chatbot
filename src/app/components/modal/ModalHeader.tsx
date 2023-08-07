import { AgentProfile } from "../AgentProfile";

interface ModalHeaderProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalHeader = ({ setIsOpen }: ModalHeaderProps) => {
  return (
    <div className={"w-full justify-between rounded-t-lg border-b p-2 px-2 flex"}>
      <i className='invisible text-4xl text-black ri-close-line' />
      <AgentProfile />
      <button onClick={() => setIsOpen(false)}>
        <i className='text-4xl text-black ri-close-line' />
      </button>{" "}
    </div>
  );
};
