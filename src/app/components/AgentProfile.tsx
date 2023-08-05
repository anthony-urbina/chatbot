interface AgentProfileProps {
  pfpOnly?: boolean;
}

export const AgentProfile = ({ pfpOnly = false }) => {
  return (
    <div className='flex items-center gap-x-2 gap-y-1'>
      <div className='w-8 h-8 bg-gray-400 rounded-full' />
      {!pfpOnly && <p className='text-base font-semibold'>Marty</p>}
    </div>
  );
};
