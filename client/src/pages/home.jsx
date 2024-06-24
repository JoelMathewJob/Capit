import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import Post from '../components/post'
import Storybar from '../components/storybar'
import Downbar from '../components/downbar'
import Search from '../pages/search'

import pic from '../assets/login.png'


function home() {

    const [selectedView, setSelectedView] = useState('home');

    const handleViewChange = (view) => {
        setSelectedView(view);
    };

    return (
        <div className='flex flex-col '>
            <div className='fixed min-[500px]:hidden lg:block'>
                <Sidebar
                    onLinkClick={handleViewChange}
                    active={selectedView}
                    username='joel_mathew36'
                    dp={pic} />
            </div>

            <div className="relative flex flex-col items-center justify-center lg:w-1/2 lg:left-80" id='centerdiv'>
                <div className="sticky top-0 z-10 bg-white lg:block">

                    {selectedView === 'home' && <Storybar />}

                </div>

                <div className='relative -top-10' >


                    {selectedView === 'home' && (
                        <>
                            <Post
                                username='joel_mathew36'
                                caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                                location='Pnvel, Mumbai'
                                dp={pic}
                                img={pic}
                            />
                            <Post
                                username='joel_mathew36'
                                caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                                location='Pnvel, Mumbai'
                                dp={pic}
                                img={pic}
                            />
                            <Post
                                username='joel_mathew36'
                                caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                                location='Pnvel, Mumbai'
                                dp={pic}
                                img={pic}
                            />
                            {/* Repeat the <Post /> component as needed */}
                        </>
                    )}

                  

                </div>

                {selectedView === 'search' && (
                        <div>
                            <Search/>
                        </div>
                    )}

                    {selectedView === 'explore' && (
                        <div>
                            {/* Your explore component or content */}
                            <h2>Explore Content</h2>
                        </div>
                    )}

                    {selectedView === 'reels' && (
                        <div>
                            {/* Your reels component or content */}
                            <h2>Reels Content</h2>
                        </div>
                    )}

                    {selectedView === 'messages' && (
                        <div>
                            {/* Your messages component or content */}
                            <h2>Messages Content</h2>
                        </div>
                    )}

                    {selectedView === 'notifications' && (
                        <div>
                            {/* Your notifications component or content */}
                            <h2>Notifications Content</h2>
                        </div>
                    )}

                    {selectedView === 'create' && (
                        <div>
                            {/* Your create component or content */}
                            <h2>Create Content</h2>
                        </div>
                    )}
                <div className='fixed bottom-0 w-full lg:hidden'>
                    <Downbar />
                </div>
            </div>
        </div>
    )
}

export default home