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
    <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-30px)] h-[520px] bg-[#111827] rounded-2xl shadow-2xl border border-gray-700 flex flex-col">

      {/* Header */}

      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">

        <div>

          <h2 className="text-white font-semibold">
            Portfolio Assistant
          </h2>

          <p className="text-xs text-green-400">
            Online
          </p>

        </div>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white"
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