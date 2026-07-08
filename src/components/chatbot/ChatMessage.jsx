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
            ? "bg-gray-800 text-white rounded-bl-md"
            : "bg-cyan-500 text-white rounded-br-md"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;