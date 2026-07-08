import { X } from "lucide-react";

const ChatWindow = ({ isOpen, onClose }) => {
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
          <X size={22}/>
        </button>

      </div>

      {/* Chat */}

      <div className="flex-1 overflow-y-auto p-5">

        <div className="bg-gray-800 rounded-xl p-4 max-w-[85%]">

          <p className="text-white">
            Hello!
          </p>

          <p className="text-gray-300 mt-2 text-sm">

            I'm Kavindu's Portfolio Assistant.

          </p>

          <p className="text-gray-400 mt-2 text-sm">

            Ask me anything about my:

          </p>

          <ul className="mt-3 text-sm text-cyan-400 space-y-1">

            <li>• Projects</li>

            <li>• Skills</li>

            <li>• Experience</li>

            <li>• Education</li>

            <li>• Contact</li>

          </ul>

        </div>

      </div>

      {/* Input */}

      <div className="border-t border-gray-700 p-4">

        <input

          disabled

          placeholder="Chat input coming next..."

          className="w-full bg-gray-800 rounded-lg px-4 py-3 text-gray-400 outline-none"

        />

      </div>

    </div>
  );
};

export default ChatWindow;