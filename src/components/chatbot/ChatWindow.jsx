import { X } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatWindow = ({
  isOpen,
  onClose,
  messages,
  onSend,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-30px)] h-[520px] bg-dark-700 rounded-2xl shadow-2xl border border-white/[0.06] flex flex-col">

      {/* Header */}

      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">

        <div>

          <h2 className="text-white font-semibold">
            Portfolio Assistant
          </h2>

          <p className="text-xs text-accent-light">
            Online
          </p>

        </div>

        <button
          onClick={onClose}
          className="text-text-muted hover:text-accent-light"
        >
          <X size={22} />
        </button>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4">

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}

      </div>

      <ChatInput onSend={onSend} />

    </div>
  );
};

export default ChatWindow;