import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MovieIcon from '@mui/icons-material/Movie';
import pic from '../assets/login.png'


function downbar(dp, active, onLinkClick) {

  const [activeLink, setActiveLink] = useState(active);

  return (
    <div className='flex justify-between w-full gap-4 px-32 py-5 bg-white'>

      <button onClick={() => { setActiveLink('home') }}>

        <HomeIcon sx={{ fontSize: 30 }} />
      </button>

      <button onClick={() => { setActiveLink('create') }}>
        <AddCircleOutlineIcon sx={{ fontSize: 30 }} />

      </button>
      
      <button onClick={() => { setActiveLink('messages') }}>
        <ForumIcon sx={{ fontSize: 30 }} />

      </button>
      
      <button onClick={() => { setActiveLink('search') }}>
        <SearchIcon sx={{ fontSize: 30 }} />

      </button>
      
      <button onClick={() => { setActiveLink('reels') }}>

        <MovieIcon sx={{ fontSize: 30 }} />
      </button>

      <button onClick={() => { setActiveLink('notification') }}>
        <NotificationsNoneIcon sx={{ fontSize: 30 }} />

      </button>

      <button onClick={() => { setActiveLink('profile') }}>

        <img
          alt=""
          src={pic}
          className="object-cover rounded-full size-8"
        />

      </button>

    </div>
  )
}

export default downbar