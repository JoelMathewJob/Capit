import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MovieIcon from '@mui/icons-material/Movie';
import pic from '../assets/login.png'


function downbar() {
  return (
    <div className='flex justify-between w-full gap-4 px-32 py-5 bg-white'>
        
        <AddCircleOutlineIcon sx={{fontSize:30}}/>
        <ForumIcon sx={{fontSize:30}}/>
        <SearchIcon sx={{fontSize:30}}/>
        <MovieIcon sx={{fontSize:30}}/>
        <NotificationsNoneIcon sx={{fontSize:30}}/>
        <img
                        alt=""
                        src={pic}
                        className="object-cover rounded-full size-8"
                    />
        
        
    </div>
  )
}

export default downbar