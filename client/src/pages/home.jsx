import React from 'react'
import Sidebar from '../components/sidebar'
import Post from '../components/post'
import Storybar from '../components/storybar'
import Downbar from '../components/downbar'

import pic from '../assets/login.png'


function home() {
    return (
        <div className='flex flex-col '>
            <div className='fixed min-[500px]:hidden lg:block'>
                <Sidebar
                    username='joel_mathew36'
                    dp={pic} />
            </div>

            <div className="relative flex flex-col items-center justify-center lg:w-1/2 lg:left-80">
                <div className="sticky top-0 z-10 bg-white lg:block">

                    <Storybar />
                </div>

                <div className='relative -top-10' >


                    <Post
                        username='joel_mathew36'
                        caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                        location='Pnvel, Mumbai'
                        dp={pic}
                        img={pic} />
                    <Post
                        username='joel_mathew36'
                        caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                        location='Pnvel, Mumbai'
                        dp={pic}
                        img={pic} />
                    <Post
                        username='joel_mathew36'
                        caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                        location='Pnvel, Mumbai'
                        dp={pic}
                        img={pic} />
                    <Post
                        username='joel_mathew36'
                        caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                        location='Pnvel, Mumbai'
                        dp={pic}
                        img={pic} />
                    <Post
                        username='joel_mathew36'
                        caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                        location='Pnvel, Mumbai'
                        dp={pic}
                        img={pic} />
                    <Post
                        username='joel_mathew36'
                        caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                        location='Pnvel, Mumbai'
                        dp={pic}
                        img={pic} />
                    <Post
                        username='joel_mathew36'
                        caption='fantastic demo loeererererererererrerererererererereijfej enenie'
                        location='Pnvel, Mumbai'
                        dp={pic}
                        img={pic} />

                </div>
                <div className='fixed bottom-0 w-full lg:hidden'>
                    <Downbar/>
                </div>
            </div>
        </div>
    )
}

export default home