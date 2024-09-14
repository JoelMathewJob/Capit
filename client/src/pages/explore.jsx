
import React from 'react'
import { useEffect, useState } from 'react'

const Explore = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const dummyPosts = Array(20).fill(null).map((_, i) => ({
      id: i + 1,
      image: `https://picsum.photos/seed/${i + 1}/800/800`,
      likes: Math.floor(Math.random() * 1000) + 100,
    }))
    setPosts(dummyPosts)
  }, [])

  const getSpanClass = (index) => {
    // This function determines the size of each post
    if (index % 5 === 0) return 'md:col-span-2 md:row-span-2' // Large
    if (index % 9 === 0) return 'md:col-span-2' // Wide
    if (index % 13 === 0) return 'md:row-span-2' // Tall
    return '' // Regular size
  }

  return (
    <div className="container px-5 pt-4 mx-auto">
     <h1 className=' m-5 text-2xl font-bold font-[poppins] text-center lg:text-left px-4'>Explore</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
        {posts.map((post, index) => (
          <div 
            key={post.id} 
            className={`relative overflow-hidden rounded-lg ${getSpanClass(index)}`}
          >
            <img 
              src={post.image} 
              alt={`Explore post ${post.id}`} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-25 opacity-0 hover:opacity-100">
              <span className="font-semibold text-white">
                {post.likes} likes
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore