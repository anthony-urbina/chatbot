interface LoadingDotsProps {
  isLoading: boolean;
  className?: string;
  color?: string;
}

export const LoadingDots = ({ isLoading, className = "", color = "bg-black" }: LoadingDotsProps) => {
  return isLoading ? (
    <div className={` loader-dots  relative mx-auto flex h-5 w-20 items-center justify-center `}>
      <div
        className={`absolute mt-1 h-3 w-3 -translate-y-1/2 transform rounded-full ${color} bg-opacity-70`}
      ></div>
      <div
        className={`absolute mt-1 h-3 w-3 -translate-y-1/2 transform rounded-full ${color} bg-opacity-50`}
      ></div>
      <div
        className={`absolute mt-1 h-3 w-3 -translate-y-1/2 transform rounded-full ${color} bg-opacity-30`}
      ></div>
      <div
        className={`absolute mt-1 h-3 w-3 -translate-y-1/2 transform rounded-full ${color} bg-opacity-10`}
      ></div>
    </div>
  ) : null;
};
