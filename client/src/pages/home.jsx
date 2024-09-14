import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Postsection from '../components/postsection';
import Storybar from '../components/storybar';
import Downbar from '../components/downbar';
import Search from '../pages/search';
import Explore from './explore';
import Reels from './reels'
import Messages from './messages';
import Notifications from './notifications';
import Create from './create';
import Settings from './settings'
import Profile from './profile';
import pic from '../assets/login.png';

function Home() {
    const [selectedView, setSelectedView] = useState('home');

    const handleViewChange = (view) => {
        setSelectedView(view);


    };

    return (
        <div className='flex w-full min-h-screen bg-gray-100'>
            {/* Sidebar */}
            <div className='fixed top-0 hidden h-full lg:block'>
                <Sidebar
                    onLinkClick={handleViewChange}
                    active={selectedView}
                    username='joel_mathew36'
                    dp={pic}
                />
            </div>

            {/* Main Content */}
            <div className='flex flex-col w-full lg:ml-60 ' >

                <div className="flex flex-col items-center justify-center w-full p-4" id='centerdiv' style={selectedView !== "home" ? { display: 'none' } : { display: 'flex' }}>
                    <div className="sticky z-10 w-full bg-white">
                        {selectedView === 'home' && <Storybar />}
                    </div>

                    {selectedView === 'home' && <Postsection />}









                </div>

                {/* Bottom Navigation for Mobile */}
                <div className='fixed bottom-0 z-10 w-full lg:hidden'>
                    <Downbar onLinkClick={handleViewChange} active={selectedView} />
                </div>

                {selectedView === 'search' && (
                    <div className='w-full '>
                        <Search />
                    </div>
                )}

                {selectedView === 'explore' && (
                    <div className='w-full'>
                        <Explore />
                    </div>
                )}

                {selectedView === 'reels' && (
                    <div>
                        <Reels/>
                    </div>
                )}

                {selectedView === 'messages' && (
                    <div className='w-full'>
                        <Messages />
                    </div>
                )}
                
                {selectedView === 'notifications' && (
                    <div className='w-full'>
                        <Notifications />
                    </div>
                )}

                {selectedView === 'create' && (
                    <div className='w-full'>
                        <Create />
                    </div>
                )}

                {selectedView === 'settings' && (
                    <div className='w-full'>
                        <Settings />
                    </div>
                )}

                {selectedView === 'profile' && (
                    <div className='w-full' >
                        <Profile />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;


// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Bookmark, Heart, MessageCircle, MoreHorizontal, PlusSquare, Search, Send } from "lucide-react"

// export default function home() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <header className="sticky top-0 z-10 bg-white border-b">
//         <div className="container flex items-center justify-between h-16 max-w-screen-md px-4 mx-auto">
//           <h1 className="text-xl font-semibold">Instagram</h1>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="icon">
//               <PlusSquare className="w-6 h-6" />
//               <span className="sr-only">New post</span>
//             </Button>
//             <Button variant="ghost" size="icon">
//               <Heart className="w-6 h-6" />
//               <span className="sr-only">Notifications</span>
//             </Button>
//             <Button variant="ghost" size="icon">
//               <Send className="w-6 h-6" />
//               <span className="sr-only">Direct messages</span>
//             </Button>
//           </div>
//         </div>
//       </header>
//       <main className="flex-1">
//         <div className="container max-w-screen-md px-4 py-4 mx-auto">
//           <ScrollArea className="w-full border rounded-md whitespace-nowrap" style={{ overflowX: 'auto' }}>
//             <div className="flex p-4 space-x-4 w-max">
//               {Array.from({length: 10}).map((_, i) => (
//                 <div key={i} className="flex flex-col items-center space-y-1">
//                   <Avatar className="w-16 h-16 p-1 border-2 border-pink-500">
//                     <AvatarImage src={`https://i.pravatar.cc/64?img=${i + 1}`} alt={`User ${i + 1}`} />
//                     <AvatarFallback>U{i + 1}</AvatarFallback>
//                   </Avatar>
//                   <span className="text-xs">User {i + 1}</span>
//                 </div>
//               ))}
//             </div>
//           </ScrollArea>
//           <div className="mt-6 space-y-4">
//             {[1, 2, 3].map((post) => (
//               <Card key={post}>
//                 <CardHeader className="flex flex-row items-center p-4 space-x-4">
//                   <Avatar>
//                     <AvatarImage src={`https://i.pravatar.cc/40?img=${post}`} alt={`User ${post}`} />
//                     <AvatarFallback>U{post}</AvatarFallback>
//                   </Avatar>
//                   <div className="flex-1 space-y-1">
//                     <p className="text-sm font-medium">user_{post}</p>
//                     <p className="text-xs text-muted-foreground">New York, USA</p>
//                   </div>
//                   <Button variant="ghost" size="icon">
//                     <MoreHorizontal className="w-4 h-4" />
//                     <span className="sr-only">More options</span>
//                   </Button>
//                 </CardHeader>
//                 <CardContent className="p-0">
//                   <img
//                     src={`https://picsum.photos/seed/${post}/600/400`}
//                     alt={`Post ${post}`}
//                     className="object-cover w-full h-auto"
//                   />
//                   <div className="p-4 space-y-4">
//                     <div className="flex items-center space-x-4">
//                       <Button variant="ghost" size="icon">
//                         <Heart className="w-6 h-6" />
//                         <span className="sr-only">Like</span>
//                       </Button>
//                       <Button variant="ghost" size="icon">
//                         <MessageCircle className="w-6 h-6" />
//                         <span className="sr-only">Comment</span>
//                       </Button>
//                       <Button variant="ghost" size="icon">
//                         <Send className="w-6 h-6" />
//                         <span className="sr-only">Share</span>
//                       </Button>
//                       <div className="flex-1" />
//                       <Button variant="ghost" size="icon">
//                         <Bookmark className="w-6 h-6" />
//                         <span className="sr-only">Save</span>
//                       </Button>
//                     </div>
//                     <p className="text-sm font-medium">1,234 likes</p>
//                     <p className="text-sm">
//                       <span className="font-medium">user_{post}</span> Lorem ipsum dolor sit amet, consectetur
//                       adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     <p className="text-sm text-muted-foreground">View all 100 comments</p>
//                     <div className="flex items-center space-x-2">
//                       <Input className="flex-1" placeholder="Add a comment..." />
//                       <Button variant="ghost">Post</Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//       <footer className="sticky bottom-0 z-10 bg-white border-t">
//         <div className="container flex items-center justify-between h-16 max-w-screen-md px-4 mx-auto">
//           <Button variant="ghost" size="icon">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-6 h-6"
//             >
//               <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//               <polyline points="9 22 9 12 15 12 15 22" />
//             </svg>
//             <span className="sr-only">Home</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Search className="w-6 h-6" />
//             <span className="sr-only">Search</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <PlusSquare className="w-6 h-6" />
//             <span className="sr-only">Create</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Heart className="w-6 h-6" />
//             <span className="sr-only">Activity</span>
//           </Button>
//           <Avatar className="w-8 h-8">
//             <AvatarImage src="https://i.pravatar.cc/32" alt="User" />
//             <AvatarFallback>U</AvatarFallback>
//           </Avatar>
//         </div>
//       </footer>
//     </div>
//   )
// }