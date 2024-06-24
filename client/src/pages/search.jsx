import React from 'react'
import SearchIcon from '@mui/icons-material/Search';



function search() {
    return (
        <div className='relative h-screen p-5 bg-gray-200 border border-gray-300 border-solid -left-80 lg:w-full' >
            <h1 className='m-5 text-2xl text-left text-bold font-[poppins]'>Search</h1>
            <div className="flex items-center justify-center ">
                <input type='text' placeholder='Search..' className='p-2 rounded-lg'/>
                <button className='relative pl-2 bg-white right-5'>
                    
                <SearchIcon fontSize='10'/>
                </button>
                
            </div>
        </div>
    )
}

export default search