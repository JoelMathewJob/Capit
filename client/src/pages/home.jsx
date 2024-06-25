import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import Postsection from '../components/postsection'

import Storybar from '../components/storybar'
import Downbar from '../components/downbar'
import Search from '../pages/search'
import Explore from '../components/explore'

import pic from '../assets/login.png'


function home() {

    const [selectedView, setSelectedView] = useState('home');

    const handleViewChange = (view) => {
        setSelectedView(view);
    };

    return (
        <div className='flex'>
            <div className='fixed hidden lg:block'>
                <Sidebar
                    onLinkClick={handleViewChange}
                    active={selectedView}
                    username='joel_mathew36'
                    dp={pic} />
            </div>


            <div className='relative flex flex-col lg:left-96 left-36 '>

                <div className="flex flex-col items-center justify-center lg:w-full " id='centerdiv'>
                    <div className="sticky top-0 z-10 bg-white ">

                        {selectedView === 'home' && <Storybar />}

                    </div>



                    {selectedView === 'home' && <Postsection />}


                    {selectedView === 'search' && (
                        <>
                            {/* <div className=' min-[500px]:hidden lg:block items-center'>

                            <Storybar />
                            <Postsection />
                        </div> */}
                            <div className='relative lg:-left-36 sm:w-full'>
                                <Search />

                            </div>

                        </>
                    )}

                    {selectedView === 'explore' && (
                        <div className='relative w-2/3 m-16 lg:-left-16 sm:w-full'>

                            <Explore />
                        </div>
                    )}

                    {selectedView === 'reels' && (
                        <div>

                            <h2>Reels Content</h2>
                        </div>
                    )}

                    {selectedView === 'messages' && (
                        <div>

                            <h2>Messages Content</h2>
                        </div>
                    )}

                    {selectedView === 'notifications' && (
                        <div>

                            <h2>Notifications Content</h2>
                        </div>
                    )}

                    {selectedView === 'create' && (
                        <div>

                            <h2>Create Content</h2>
                        </div>
                    )}

                    {selectedView === 'settings' && (
                        <div>

                            <h2>Settings  Content</h2>
                        </div>
                    )}



                    <div className='fixed bottom-0 w-full lg:hidden'>
                        <Downbar />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default home