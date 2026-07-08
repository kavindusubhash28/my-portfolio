import { MessageCircle } from "lucide-react";

const ChatButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors shadow-lg flex items-center justify-center"
            >
                <MessageCircle size={28} className="text-white" />
            </button>
    );
};

export default ChatButton;