import { ReactNode, createContext, useContext, useState } from "react";

interface Session {
  reasonForContact: string;
}

const sessionInitialState = {
  reasonForContact: "",
};

interface ChatContextType {
  chatStep: number;
  blockStep: number;
  session: Session;
  updateStep: (type: "chat" | "block", action: "increase" | "decrease" | "reset") => void;
  updateSession: (key: string, value: string) => void;
}

const ChatContext = createContext<ChatContextType>({
  chatStep: 0,
  blockStep: 0,
  session: sessionInitialState,
  updateStep: () => undefined,
  updateSession: () => undefined,
});

export const ChatWrapper = ({ children }: { children: ReactNode }) => {
  const [chatStep, setChatStep] = useState<number>(0);
  const [blockStep, setBlockStep] = useState<number>(0);
  const [session, setSession] = useState<Session>(sessionInitialState);

  const updateStep = (type: "chat" | "block", action: "increase" | "decrease" | "reset") => {
    const setStep = type === "chat" ? setChatStep : setBlockStep;
    const step = type === "chat" ? chatStep : blockStep;
    if (action === "increase") setStep(step + 1);
    if (action === "decrease") setStep(step - 1);
    if (action === "reset") setStep(0);
  };

  const updateSession = (key: string, value: string) => {
    setSession({ ...session, [key]: value });
  };

  const settings = {
    chatStep,
    blockStep,
    session,
    updateStep,
    updateSession,
  };

  return <ChatContext.Provider value={settings}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
