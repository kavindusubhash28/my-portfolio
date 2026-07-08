import { Send } from "lucide-react";
import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-700 p-4 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        className="flex-1 bg-gray-800 rounded-lg px-4 py-3 text-white outline-none"
      />

      <button
        onClick={handleSend}
        className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg transition-colors"
      >
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;