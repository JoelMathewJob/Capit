import React, { useState } from 'react';


function Messages({handleLinkClick}) {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showChatSection, setShowChatSection] = useState(false);

  const chatList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
    setShowChatSection(true);
    // Fetch or set messages for selected chat from backend or elsewhere
    setMessages([
      { id: 1, sender: 'Alice', text: 'Hello!' },
      { id: 2, sender: 'Bob', text: 'Hi Alice, how are you?' },
      { id: 3, sender: 'Alice', text: 'I’m good, thanks!' },
      { id: 4, sender: 'Alice', text: 'What about you?' },
      { id: 5, sender: 'Bob', text: 'Doing great!' },
    ]);
  };

  const handleBackToList = () => {
    setShowChatSection(false);
    setSelectedChat(null);
    setMessages([]);
  };

  const sendMessage = () => {
    // Implement sending message functionality if needed
  };

  return (
    <div className="flex flex-col h-screen md:flex-row">
      {/* Chat list */}
      <div className={`md:w-1/3 border-r bg-white p-4 overflow-y-auto ${showChatSection ? 'hidden md:block' : 'block'}`}>
      <button className="text-blue-500" onClick={() => handleLinkClick('home')}>
              Back
            </button>
      <h1 className='m-5 text-2xl  font-bold font-[poppins] text-center'>Chats</h1>

        <ul>
          {chatList.map((chat) => (
            <li
              key={chat.id}
              className="flex items-center p-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => handleChatClick(chat)}
            >
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-8 h-8 mr-2 rounded-full"
              />
              <div className="flex-1">
                <p className="font-medium">{chat.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat messages */}
      <div className={`flex-1 ${showChatSection ? 'block' : 'hidden'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white md:hidden">
          <button className="text-blue-500" onClick={handleBackToList}>
            Back
          </button>
          <h2 className="text-lg font-semibold">Chat with {selectedChat?.name}</h2>
          <div className="w-8"></div> {/* Placeholder for alignment */}
        </div>

        {/* Chat messages */}
        <div className="h-full p-4 overflow-y-auto bg-gray-100">
          {/* Header for larger screens */}
          <div className={`bg-white p-4 flex items-center justify-between hidden md:flex ${showChatSection ? 'block' : 'hidden'}`}>
            <button className="text-blue-500" onClick={handleBackToList}>
              Back
            </button>
            <h2 className="text-lg font-semibold">Chat with {selectedChat?.name}</h2>
            <div className="w-8"></div> {/* Placeholder for alignment */}
          </div>

          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${message.sender === 'Alice' ? 'flex-row-reverse' : 'flex-row'} flex justify-start`}
            >
              <div
                className={`inline-block rounded-lg p-2 max-w-md ${
                  message.sender === 'Alice' ? 'bg-green-200 text-right' : 'bg-blue-200 text-left'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="flex items-center p-4 bg-white border-t">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-l"
          />
          <button
            className="px-4 py-1 text-white bg-blue-500 rounded-l-none rounded-r hover:bg-blue-600"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
