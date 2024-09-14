// import React, { useState } from 'react';
// import pic from '../assets/capitlogo.png';

// function Profile() {
//   const [status, setStatus] = useState('active');
//   const [fullName, setFullName] = useState('');
//   const [username, setUsername] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'active':
//         return 'bg-green-300';
//       case 'busy':
//         return 'bg-yellow-300';
//       case 'off':
//         return 'bg-gray-300';
//       default:
//         return '';
//     }
//   };

//   const handleSave = () => {
//     // Here you can perform actions like saving to a backend or updating state
//     console.log('Saving changes...');
//     console.log('Full Name:', fullName);
//     console.log('Username:', username);
//     console.log('Date of Birth:', dateOfBirth);
//     console.log('Status:', status);
//   };

//   return (
//     <div className='flex flex-col items-center w-full min-h-screen bg-gray-100'>
//       <div className='flex flex-col items-center w-full max-w-4xl p-5 mt-5 bg-white rounded-lg shadow-md'>
//         <div className='relative w-40 h-40 mb-4'>
//           <img
//             src={pic}
//             alt='Profile Pic'
//             className='w-full h-full transition-all duration-300 ease-in-out rounded-full filter hover:grayscale'
//           />
          
//           <div className={`absolute bottom-0 right-0 w-6 h-6 rounded-full ${getStatusColor(status)}`}></div>
//         </div>
//         <div className='text-center'>
//           <h1 className='text-2xl font-semibold'>Username</h1>
//           <p className='text-gray-600'>Full Name</p>
//           <p className='m-5'>This is the bio section where the user can describe themselves.</p>
//         </div>
//         <div className='flex justify-around w-full mt-4'>
//           <div className='flex flex-col items-center'>
//             <span className='text-lg font-semibold'>10</span>
//             <span className='text-gray-600'>Posts</span>
//           </div>
//           <div className='flex flex-col items-center'>
//             <span className='text-lg font-semibold'>100</span>
//             <span className='text-gray-600'>Followers</span>
//           </div>
//           <div className='flex flex-col items-center'>
//             <span className='text-lg font-semibold'>150</span>
//             <span className='text-gray-600'>Following</span>
//           </div>
//         </div>
//         <div className='flex flex-col w-full mt-4'>
          
//         </div>
//         <div className='flex justify-center w-full mt-4'>
          
//         </div>
//       </div>
//       <div className='flex flex-wrap justify-center w-full max-w-4xl mt-5'>
//         {/* Placeholder for user's posts */}
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         {/* Repeat above divs for more posts */}
//       </div>
//     </div>
//   );
// }

// export default Profile;


// // import { Settings } from 'lucide-react'
// // import {Link} from "react-router-dom"

// // export default function ProfilePage() {
// //   return (
// //     <div className="container p-4 mx-auto">
// //       <div className="flex items-center justify-between mb-8">
// //         <div className="flex items-center space-x-4">
// //           <div className="w-20 h-20 rounded-full bg-muted"></div>
// //           <div>
// //             <h1 className="text-2xl font-bold">username</h1>
// //             <p className="text-muted-foreground">Bio goes here</p>
// //           </div>
// //         </div>
// //         <Link href="/settings" className="p-2 rounded-md hover:bg-accent">
// //           <Settings className="w-6 h-6" />
// //         </Link>
// //       </div>
// //       <div className="grid grid-cols-3 gap-1 md:gap-4">
// //         {[...Array(9)].map((_, i) => (
// //           <div key={i} className="rounded-md bg-muted aspect-square"></div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }


import { useState, useEffect } from "react"
import { Settings, Menu, Heart, MessageCircle } from "lucide-react"

export default function Profile() {
  const [posts, setPosts] = useState([])

  // Using useEffect to generate dummy post data
  useEffect(() => {
    const dummyPosts = Array(20).fill(null).map((_, i) => ({
      id: i + 1,
      image: `https://picsum.photos/seed/${i + 1}/800/800`,
      likes: Math.floor(Math.random() * 1000) + 100,
      comments: Math.floor(Math.random() * 100) + 10,
    }))
    setPosts(dummyPosts)
  }, [])

  // Function to assign different sizes to posts
  const getSpanClass = (index) => {
    if (index % 9 === 0) return 'md:col-span-2 md:row-span-2' // Large square
    if (index % 14 === 0) return 'md:col-span-2' // Wide
    if (index % 21 === 0) return 'md:row-span-2' // Tall
    return '' // Regular size
  }

  return (
    <div className="w-full max-w-3xl px-4 mx-auto md:px-0">
      <div className="relative flex items-center justify-end py-4">
        <div className="flex items-center gap-4">
          <Settings className="w-6 h-6 cursor-pointer" />
          <Menu className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 py-8 md:py-12">
        <div className="relative">
          <div className="w-24 h-24 border-4 rounded-full border-background">
            <img src="https://picsum.photos/200" alt="Profile" className="object-cover w-full h-full rounded-full" />
          </div>
        </div>
        <div className="grid gap-2 text-center">
          <h2 className="text-2xl font-bold">Acme Inc</h2>
          <p className="text-muted-foreground">We are a leading provider of innovative solutions.</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex flex-col items-center gap-1">
            <span className="font-medium">123</span>
            <span className="text-muted-foreground">Posts</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-medium">10.2K</span>
            <span className="text-muted-foreground">Followers</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-medium">1,234</span>
            <span className="text-muted-foreground">Following</span>
          </div>
        </div>
      </div>

      {/* Post Grid Section */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
        {posts.map((post, index) => (
          <div 
            key={post.id} 
            className={`relative overflow-hidden rounded-lg ${getSpanClass(index)}`}
          >
            <img 
              src={post.image} 
              alt={`Post ${post.id}`} 
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-black bg-opacity-25 opacity-0 hover:opacity-100">
              <span className="flex gap-1 font-semibold text-white ">
                {post.likes} <Heart  width={15} height={25}/>
              </span>
              <span className="flex gap-1 font-semibold text-white">
                {post.comments} <MessageCircle  width={15} height={25}/>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
