import { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        "Hi! I'm Kavindu's Portfolio Assistant.\n\nAsk me anything about my skills, projects or experience."
    }
  ]);

  const handleSend = (text) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: "Great question! We'll make me smart in the next step",
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);
  };

  return (
    <>
      <ChatButton
        onClick={() => setIsOpen(true)}
      />

      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        onSend={handleSend}
      />
    </>
  );
};

export default Chatbot;