import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatButton
        onClick={() => setIsOpen(true)}
      />

      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Chatbot;