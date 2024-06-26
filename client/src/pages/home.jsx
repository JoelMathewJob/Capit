import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Postsection from '../components/postsection';
import Storybar from '../components/storybar';
import Downbar from '../components/downbar';
import Search from '../pages/search';
import Explore from './explore';
import Messages from './messages';
import Profile from './profile';
import pic from '../assets/login.png';

function Home() {
    const [selectedView, setSelectedView] = useState('home');

    const handleViewChange = (view) => {
        setSelectedView(view);
    };

    return (
        <div className='flex w-full min-h-screen bg-gray-100'>
            {/* Sidebar */}
            <div className='fixed top-0 hidden h-full lg:block'>
                <Sidebar
                    onLinkClick={handleViewChange}
                    active={selectedView}
                    username='joel_mathew36'
                    dp={pic}
                />
            </div>

            {/* Main Content */}
            <div className='flex flex-col items-center justify-center w-full lg:ml-60'>
                <div className="flex flex-col items-center justify-center w-full p-4" id='centerdiv'>
                    <div className="sticky z-10 w-full bg-white">
                        {selectedView === 'home' && <Storybar />}
                    </div>

                    {selectedView === 'home' && <Postsection />}

                    {selectedView === 'reels' && (
                        <div>
                            <h2>Reels Content</h2>
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
                            <h2>Settings Content</h2>
                        </div>
                    )}
                </div>

                {/* Bottom Navigation for Mobile */}
                <div className='fixed bottom-0 z-10 w-full lg:hidden'>
                    <Downbar onLinkClick={handleViewChange} active={selectedView} />
                </div>

                {selectedView === 'search' && (
                    <div className='w-full '>
                        <Search />
                    </div>
                )}

                {selectedView === 'explore' && (
                    <div className='w-full'>
                        <Explore />
                    </div>
                )}

                {selectedView === 'messages' && (
                    <div className='w-full'>
                        <Messages  />
                    </div>
                )}

                {selectedView === 'profile' && (
                    <div className='w-full'>
                        <Profile />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
