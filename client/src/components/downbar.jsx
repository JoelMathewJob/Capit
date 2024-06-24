import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MovieIcon from '@mui/icons-material/Movie';

function downbar() {
  return (
    <div className='flex justify-between w-full gap-4 py-5 bg-white px-32'>
        
        <AddCircleOutlineIcon sx={{fontSize:30}}/>
        <ForumIcon sx={{fontSize:30}}/>
        <SearchIcon sx={{fontSize:30}}/>
        <MovieIcon sx={{fontSize:30}}/>
        <NotificationsNoneIcon sx={{fontSize:30}}/>
        
        
    </div>
  )
}

export default downbar