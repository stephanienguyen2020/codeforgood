import { useState, useEffect } from "react";
import OpenAI from "openai";
import styled, { ThemeProvider } from "styled-components";

// Initialize OpenAI
const openai = process.env.NEXT_PUBLIC_OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    })
  : null;

const theme = {
  background: "white",
  headerBgColor: "#db4a2b",
  headerFontColor: "white",
  botBubbleColor: "#2e2e2e",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
  botFontColor: "white",
};

// Styled components for chatbot UI
const ChatContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 100px;
  right: 50px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  z-index: 9999;
`;

const Header = styled.div`
  background-color: ${(props) => props.theme.headerBgColor};
  color: ${(props) => props.theme.headerFontColor};
  padding: 10px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

const MessageContainer = styled.div`
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
`;

const Message = styled.div`
  background-color: ${(props) =>
    props.role === "user"
      ? props.theme.userBubbleColor
      : props.theme.botBubbleColor};
  color: ${(props) =>
    props.role === "user"
      ? props.theme.userFontColor
      : props.theme.botFontColor};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 75%;
  align-self: ${(props) => (props.role === "user" ? "flex-end" : "flex-start")};
`;

const InputContainer = styled.form`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.headerBgColor};
  color: ${(props) => props.theme.headerFontColor};
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bf3f25;
  }
`;

// Floating button to open the chatbot
const FloatingButton = styled.button`
  background-color: ${(props) => props.theme.headerBgColor};
  color: ${(props) => props.theme.headerFontColor};
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  font-size: 30px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  &:hover {
    background-color: #bf3f25;
  }
`;

const loadWebsiteContent = async () => {
  try {
    const response = await fetch("/components/website_scrape_content.txt");
    const content = await response.text();
    return content;
  } catch (error) {
    console.error("Error loading website content:", error);
    return "";
  }
};

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi there 👋\n I'm Carl, Heart in the Game's Virtual Assistant. How can I help you today?",
    },
  ]); // Initial message from the bot
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [websiteContent, setWebsiteContent] = useState("");

  useEffect(() => {
    const fetchWebsiteContent = async () => {
      const content = await loadWebsiteContent();
      setWebsiteContent(content);
    };
    fetchWebsiteContent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { role: "user", content: input }]);

    if (!openai) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, but I'm not configured correctly. Please contact the site administrator.",
        },
      ]);
      setInput("");
      return;
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You're an Assistant for Heart in the Game. You are an EKG and heart health expert. Answer the user's questions based on the following website content and anything related to EKG and heart health. Keep it succinct, and you are an expert on EKG.

              Website Content:
              ${websiteContent}`,
          },
          ...messages,
          { role: "user", content: input },
        ],
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("OpenAI API error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, but I encountered an error. Please try again later or contact support.",
        },
      ]);
    }

    setInput("");
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Floating button */}
      <FloatingButton onClick={() => setIsChatVisible(!isChatVisible)}>
        💬
      </FloatingButton>

      {/* Chatbot window */}
      <ChatContainer isVisible={isChatVisible}>
        <Header>Carl AI</Header>
        <MessageContainer>
          {messages.map((msg, index) => (
            <Message key={index} role={msg.role}>
              <strong>{msg.role === "user" ? "You:" : "AI:"}</strong>{" "}
              {msg.content}
            </Message>
          ))}
        </MessageContainer>
        <InputContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <Button type="submit">Send</Button>
        </InputContainer>
      </ChatContainer>
    </ThemeProvider>
  );
}
