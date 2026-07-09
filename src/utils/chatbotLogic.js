import chatbotData from "../data/chatbotData";

export const getBotResponse = (message) => {
  const input = message.toLowerCase().trim();

  for (const item of chatbotData) {
    for (const keyword of item.keywords) {
      if (input.includes(keyword)) {
        return item.answer;
      }
    }
  }

  return `Sorry 

I couldn't understand that.

Try asking me about:

• Skills
• Projects
• Education
• Experience
• Contact`;
};