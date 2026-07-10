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
    <div className="border-t border-white/[0.06] p-4 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        className="flex-1 bg-dark-600 rounded-lg px-4 py-3 text-white outline-none"
      />

      <button
        onClick={handleSend}
        className="bg-gradient-to-br from-accent to-accent-dark hover:from-accent-light hover:to-accent text-white p-3 rounded-lg transition-colors"
      >
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;