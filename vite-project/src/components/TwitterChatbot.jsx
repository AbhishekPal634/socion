import React, { useState, useEffect, useRef } from "react";
import { Send, MessageCircle, X, Bot, User } from "lucide-react";

const TypingIndicator = () => (
  <div className="flex gap-2 p-3 bg-gray-100 rounded-lg rounded-tl-none w-16">
    <div
      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "0ms" }}
    />
    <div
      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "150ms" }}
    />
    <div
      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "300ms" }}
    />
  </div>
);

const ChatMessage = ({ message, isBot }) => (
  <div
    className={`flex items-start gap-2 mb-4 ${
      isBot ? "justify-start" : "justify-end"
    }`}
  >
    {isBot && (
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <Bot size={20} className="text-gray-600" />
      </div>
    )}
    <div
      className={`max-w-[80%] p-3 rounded-lg ${
        isBot
          ? "bg-gray-100 rounded-tl-none"
          : "bg-black text-white rounded-tr-none"
      }`}
    >
      {message}
    </div>
    {!isBot && (
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <User size={20} className="text-white" />
      </div>
    )}
  </div>
);

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        className="p-2 text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
      >
        <Send size={20} />
      </button>
    </form>
  );
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hey! I am here to help you analyze post performance, compare content, and find the best times to post!",
      isBot: true,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(window.innerWidth < 768);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (message) => {
    setMessages((prev) => [...prev, { text: message, isBot: false }]);
    setIsTyping(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/twitterchat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();
      console.log(data);

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          text: data.response || "Sorry, I couldn't understand that.",
          isBot: true,
        },
      ]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: "Oops! Something went wrong. Please try again.", isBot: true },
      ]);
    }
  };

  useEffect(() => {
    const initialHeight = window.innerHeight;

    const handleResize = () => {
      const currentHeight = window.innerHeight;

      // Ignore resize events caused by keyboard opening
      if (initialHeight - currentHeight > 100) return;

      setIsMinimized(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 p-4 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className="fixed right-0 top-16 bottom-0 w-full md:w-[380px] border-l bg-white shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex-shrink-0 flex justify-between items-center p-4 border-b bg-black text-white">
          <div className="flex items-center gap-2">
            <Bot size={24} />
            <h2 className="text-lg font-semibold">
              X (Twitter) Chat Assistant
            </h2>
          </div>
          <button
            onClick={() => setIsMinimized(true)}
            className="md:hidden p-2 hover:bg-gray-800 rounded-full"
            aria-label="Minimize chat"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isBot={message.isBot}
            />
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <TypingIndicator />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex-shrink-0 p-4 border-t">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
