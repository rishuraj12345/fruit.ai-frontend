import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hello! How can I help you today?' }]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { from: 'user', text: input }]);

    // Add bot response after user's message
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: 'bot', text: 'Thanks for your message!' },
      ]);
    }, 500);

    // Clear input field
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-6">
        <div className="h-96 overflow-y-auto mb-4 p-3 bg-gray-100 rounded-xl">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-3 ${
                message.from === 'bot' ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`${
                  message.from === 'bot'
                    ? 'bg-blue-600 text-white animate-fade-in'
                    : 'bg-gray-300 text-black'
                } p-3 rounded-lg max-w-xs shadow-md`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition duration-300"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-full text-sm transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;

