import { ReactNode, createContext, useContext, useState } from "react";

interface ChatContextType {
  step: number;
  increaseStep: () => void;
  decreaseStep: () => void;
}

const ChatContext = createContext<ChatContextType>({
  step: 0,
  increaseStep: () => undefined,
  decreaseStep: () => undefined,
});

export const ChatWrapper = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<number>(0);
  const [gameStep, setGameStep] = useState<number>(0);

  const increaseStep = () => {
    setStep(step + 1);
  };
  const decreaseStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const settings = {
    step,
    increaseStep,
    decreaseStep,
  };

  return <ChatContext.Provider value={settings}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
