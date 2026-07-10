const ChatMessage = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <div
      className={`flex mb-4 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isBot
            ? "bg-dark-600 text-white rounded-bl-md"
            : "bg-gradient-to-br from-accent to-accent-dark text-white rounded-br-md"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;