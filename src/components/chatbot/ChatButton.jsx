import { MessageCircle } from "lucide-react";

const ChatButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-dark hover:from-accent-light hover:to-accent transition-all duration-300 shadow-[0_10px_30px_rgba(255,122,0,0.35)] hover:shadow-[0_14px_36px_rgba(255,122,0,0.45)] flex items-center justify-center border border-white/10"
            >
                <MessageCircle size={28} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]" />
            </button>
    );
};

export default ChatButton;