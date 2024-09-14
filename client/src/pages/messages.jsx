// import React, { useState } from 'react';


// function Messages({handleLinkClick}) {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [showChatSection, setShowChatSection] = useState(false);

//   const chatList = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//   ];

//   const handleChatClick = (chat) => {
//     setSelectedChat(chat);
//     setShowChatSection(true);
//     // Fetch or set messages for selected chat from backend or elsewhere
//     setMessages([
//       { id: 1, sender: 'Alice', text: 'Hello!' },
//       { id: 2, sender: 'Bob', text: 'Hi Alice, how are you?' },
//       { id: 3, sender: 'Alice', text: 'I’m good, thanks!' },
//       { id: 4, sender: 'Alice', text: 'What about you?' },
//       { id: 5, sender: 'Bob', text: 'Doing great!' },
//     ]);
//   };

//   const handleBackToList = () => {
//     setShowChatSection(false);
//     setSelectedChat(null);
//     setMessages([]);
//   };

//   const sendMessage = () => {
//     // Implement sending message functionality if needed
//   };

//   return (
//     <div className="flex flex-col h-screen md:flex-row">
//       {/* Chat list */}
//       <div className={`md:w-1/4 border-r bg-white p-4 overflow-y-auto ${showChatSection ? 'hidden md:block' : 'block'}`}>
      
//       <h1 className='m-5 text-2xl  font-bold font-[poppins] text-center'>Chats</h1>

//         <ul>
//           {chatList.map((chat) => (
//             <li
//               key={chat.id}
//               className="flex items-center p-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-100"
//               onClick={() => handleChatClick(chat)}
//             >
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="User"
//                 className="w-8 h-8 mr-2 rounded-full"
//               />
//               <div className="flex-1">
//                 <p className="font-medium">{chat.name}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Chat messages */}
//       <div className={`flex-1 ${showChatSection ? 'block' : 'hidden'}`}>
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 bg-white md:hidden">
//           <button className="text-blue-500" onClick={handleBackToList}>
//             Back
//           </button>
//           <h2 className="text-lg font-semibold"> {selectedChat?.name}</h2>
//           <div className="w-8"></div> {/* Placeholder for alignment */}
//         </div>

//         {/* Chat messages */}
//         <div className="h-full p-4 overflow-y-auto bg-gray-100">
//           {/* Header for larger screens */}
//           <div className={`bg-white p-4  items-center justify-between hidden md:flex ${showChatSection ? 'block' : 'hidden'}`}>
//             <button className="text-blue-500" onClick={handleBackToList}>
//               Back
//             </button>
//             <h2 className="text-lg font-semibold"> {selectedChat?.name}</h2>
//             <div className="w-8"></div> {/* Placeholder for alignment */}
//           </div>

//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`mb-4 ${message.sender === 'Alice' ? 'flex-row-reverse' : 'flex-row'} flex justify-start`}
//             >
//               <div
//                 className={`inline-block rounded-lg p-2 max-w-md ${
//                   message.sender === 'Alice' ? 'bg-green-200 text-right' : 'bg-blue-200 text-left'
//                 }`}
//               >
//                 {message.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Message input */}
//         <div className="flex items-center p-4 bg-white border-t">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             className="flex-1 p-2 border rounded-l"
//           />
//           <button
//             className="px-4 py-1 text-white bg-blue-500 rounded-l-none rounded-r hover:bg-blue-600"
//             onClick={sendMessage}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Messages;


import React, { useState } from 'react'
import { ArrowLeft, Edit, Info, Phone, Send, Video } from "lucide-react"

const conversations = [
  { id: 1, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=1", lastMessage: "Hey, how are you?", time: "2h" },
  { id: 2, name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=2", lastMessage: "Sure, let's meet tomorrow", time: "1d" },
  { id: 3, name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=3", lastMessage: "Did you see the new post?", time: "3d" },
  { id: 4, name: "Bob Williams", avatar: "https://i.pravatar.cc/150?img=4", lastMessage: "Thanks for the help!", time: "1w" },
]

const messages = [
  { id: 1, sender: "John Doe", content: "Hey, how's it going?", time: "10:00 AM", isSent: false },
  { id: 2, sender: "You", content: "Hi John! I'm doing well, thanks. How about you?", time: "10:05 AM", isSent: true },
  { id: 3, sender: "John Doe", content: "I'm good too. Did you see the latest update?", time: "10:10 AM", isSent: false },
  { id: 4, sender: "You", content: "No, I haven't. What's new?", time: "10:15 AM", isSent: true },
]

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [showConversations, setShowConversations] = useState(true)

  const toggleConversations = () => {
    setShowConversations(!showConversations)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Conversation List */}
      <div className={`${showConversations ? 'block' : 'hidden'} md:block w-full md:w-1/3 bg-white border-r border-gray-200`}>
        <div className="p-4 border-b border-gray-200">
        <h1 className='m-5 text-2xl font-bold font-[poppins] px-3 text-center lg:text-left'>Chats</h1>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-5rem)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                selectedConversation.id === conversation.id ? "bg-gray-100" : ""
              }`}
              onClick={() => {
                setSelectedConversation(conversation)
                setShowConversations(false)
              }}
            >
              <img src={conversation.avatar} alt={conversation.name} className="w-12 h-12 rounded-full" />
              <div className="flex-1 ml-4">
                <h3 className="font-semibold">{conversation.name}</h3>
                <p className="text-sm text-gray-500">{conversation.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-400">{conversation.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className={`${showConversations ? 'hidden' : 'flex'} md:flex flex-1 flex-col`}>
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <button className="mr-2 md:hidden" onClick={toggleConversations}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <img src={selectedConversation.avatar} alt={selectedConversation.name} className="w-8 h-8 rounded-full" />
            <h2 className="ml-2 font-semibold">{selectedConversation.name}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isSent ? "justify-end" : "justify-start"} mb-4`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.isSent ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <p>{message.content}</p>
                <span className="block mt-1 text-xs">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Edit className="w-5 h-5" />
            </button>
            <input
              className="flex-1 p-2 border border-gray-300 rounded-full"
              placeholder="Message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="p-2 rounded-full hover:bg-gray-100" disabled={!newMessage}>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}