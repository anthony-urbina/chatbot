import Image from "next/image";

interface AgentProfileProps {
  pfpOnly?: boolean;
}

export const AgentProfile = ({ pfpOnly = false }) => {
  return (
    <div className='flex items-center gap-x-2 gap-y-1'>
      <Image
        alt='marty-pfp.webp'
        src={"/images/marty-pfp.webp"}
        width={32}
        height={32}
        className='object-cover w-8 h-8 border border-gray-400 rounded-full '
      />
      {!pfpOnly && <p className='text-base font-semibold'>Marty</p>}
    </div>
  );
};
