import React, { useState } from 'react';

function reels() {
  const reellist = [
    {
      id: 1,
      videoUrl: 'https://picsum.photos/200/300',
      thumbnail: 'https://picsum.photos/500/800?random="1"',
    },
    {
      id: 2,
      videoUrl: 'https://dummyvideo.com/501x301',
      thumbnail: 'https://picsum.photos/500/800?random="3',
    },
    {
      id: 3,
      videoUrl: 'https://dummyvideo.com/600x360',
      thumbnail: 'https://picsum.photos/500/800?random="2"',
    },
    {
      id: 4,
      videoUrl: 'https://dummyvideo.com/601x361',
      thumbnail: 'https://picsum.photos/500/800?random="4"',
    },
    {
      id: 5,
      videoUrl: 'https://dummyvideo.com/502x302',
      thumbnail: 'https://picsum.photos/500/800?random="5"',
    },
    {
      id: 6,
      videoUrl: 'https://dummyvideo.com/503x303',
      thumbnail: 'https://picsum.photos/500/800?random="6"',
    },
  ];

  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const nextReel = () => {
    setCurrentReelIndex((prevIndex) => (prevIndex + 1) % reellist.length);
  };

  const previousReel = () => {
    setCurrentReelIndex((prevIndex) =>
      prevIndex === 0 ? reellist.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="relative w-full max-w-md p-4">
        <video
          className="w-full h-auto"
          src={reellist[currentReelIndex].videoUrl}
          controls
          poster={reellist[currentReelIndex].thumbnail}
        />
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full p-4">
          <button
            onClick={previousReel}
            className="p-2 text-white bg-black bg-opacity-50 rounded-full"
          >
            Prev
          </button>
          <button
            onClick={nextReel}
            className="p-2 text-white bg-black bg-opacity-50 rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default reels;
