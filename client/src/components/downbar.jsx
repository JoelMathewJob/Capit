import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MovieIcon from '@mui/icons-material/Movie';
import pic from '../assets/login.png';

function Downbar({ active, onLinkClick }) {
  const [activeLink, setActiveLink] = useState(active);

  const handleLinkClick = (view) => {
    setActiveLink(view);
    onLinkClick(view);
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 z-10 bg-white'>
      <div className='flex justify-center max-w-md gap-10 py-3 mx-auto'>
        <button onClick={() => handleLinkClick('home')}>
          <HomeIcon sx={{ fontSize: 30 }} className={activeLink === 'home' ? 'text-blue-500' : ''} />
        </button>

        <button onClick={() => handleLinkClick('create')}>
          <AddCircleOutlineIcon sx={{ fontSize: 30 }} className={activeLink === 'create' ? 'text-blue-500' : ''} />
        </button>

        <button onClick={() => handleLinkClick('messages')}>
          <ForumIcon sx={{ fontSize: 30 }} className={activeLink === 'messages' ? 'text-blue-500' : ''} />
        </button>

        <button onClick={() => handleLinkClick('search')}>
          <SearchIcon sx={{ fontSize: 30 }} className={activeLink === 'search' ? 'text-blue-500' : ''} />
        </button>

        <button onClick={() => handleLinkClick('reels')}>
          <MovieIcon sx={{ fontSize: 30 }} className={activeLink === 'reels' ? 'text-blue-500' : ''} />
        </button>

        <button onClick={() => handleLinkClick('notifications')}>
          <NotificationsNoneIcon sx={{ fontSize: 30 }} className={activeLink === 'notifications' ? 'text-blue-500' : ''} />
        </button>

        <button onClick={() => handleLinkClick('profile')}>
          <img
            alt="Profile"
            src={pic}
            className={`object-cover rounded-full w-8 h-8 ${activeLink === 'profile' ? 'border border-blue-500' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}

export default Downbar;
