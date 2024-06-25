import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MovieIcon from '@mui/icons-material/Movie';

function sidebar({ username, dp, active, onLinkClick }) {
    const [activeLink, setActiveLink] = useState(active);

    return (
        <div className="flex flex-col justify-between h-screen bg-white border-e ">
            <div className="px-10 py-6">
                <span className="grid h-16 w-40 place-content-center rounded-lg bg-gray-100 text-3xl font-[poppins] font-medium">
                    Capit.
                </span>

                <ul className="my-6 space-y-1 leading-9">
                    <li>
                        <Link

                            className="block px-4 py-2 font-medium align-middle rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => { setActiveLink('home'); onLinkClick('home') }}
                            style={{ backgroundColor: activeLink === 'home' ? 'rgb(243 244 246)' : '', color: activeLink === 'home' ? 'rgb(55 65 81)' : 'rgb(107 114 128)' }}
                        ><HomeIcon />
                            <span className='ml-2 align-middle'> Home</span>
                        </Link>
                    </li>

                    {/* <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex items-center justify-between px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="font-medium "> Teams </span>

                                <span className="transition duration-300 shrink-0 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="px-4 mt-2 space-y-1">
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Banned Users
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Calendar
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li> */}

                    <li>
                        <Link

                            className="block px-4 py-2 font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => { setActiveLink('search'); onLinkClick('search') }}
                            style={{ backgroundColor: activeLink === 'search' ? 'rgb(243 244 246)' : '', color: activeLink === 'search' ? 'rgb(55 65 81)' : '' }}
                        ><SearchIcon />
                            <span className='ml-2 align-middle'> Search</span>
                        </Link>
                    </li>

                    <li>
                        <Link

                            className="block px-4 py-2 font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => { setActiveLink('explore'); onLinkClick('explore') }}
                            style={{ backgroundColor: activeLink === 'explore' ? 'rgb(243 244 246)' : '', color: activeLink === 'explore' ? 'rgb(55 65 81)' : '' }}
                        ><ExploreIcon />
                            <span className='ml-2 align-middle'> Explore</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="block px-4 py-2 font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => { setActiveLink('reels'); onLinkClick('reels') }}
                            style={{ backgroundColor: activeLink === 'reels' ? 'rgb(243 244 246)' : '', color: activeLink === 'reels' ? 'rgb(55 65 81)' : '' }}
                        ><MovieIcon />
                            <span className='ml-2 align-middle'> Reels</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="block px-4 py-2 font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => { setActiveLink('messages'); onLinkClick('messages') }}
                            style={{ backgroundColor: activeLink === 'messages' ? 'rgb(243 244 246)' : '', color: activeLink === 'messages' ? 'rgb(55 65 81)' : '' }}
                        ><ForumIcon />
                            <span className='ml-2 align-middle'> Messages</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="block px-4 py-2 font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => { setActiveLink('notifications'); onLinkClick('notifications') }}
                            style={{ backgroundColor: activeLink === 'notifications' ? 'rgb(243 244 246)' : '', color: activeLink === 'notifications' ? 'rgb(55 65 81)' : '' }}
                        ><NotificationsNoneIcon />
                            <span className='ml-2 align-middle'> Notifications</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="block px-4 py-2 font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={() => { setActiveLink('create'); onLinkClick('create') }}
                            style={{ backgroundColor: activeLink === 'create' ? 'rgb(243 244 246)' : '', color: activeLink === 'create' ? 'rgb(55 65 81)' : '' }}
                        ><AddCircleOutlineIcon />
                            <span className='ml-2 align-middle'> Create</span>
                        </Link>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex items-center justify-between px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                                onClick={() => { setActiveLink('account') }}
                                style={{ backgroundColor: activeLink === 'account' ? 'rgb(243 244 246)' : '', color: activeLink === 'account' ? 'rgb(55 65 81)' : '' }}
                            >
                                <span className="font-medium "> Account </span>

                                <span className="transition duration-300 shrink-0 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="px-4 mt-2 space-y-1">
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                        onClick={() => { setActiveLink('settings');onLinkClick('settings') }}
                                        style={{ backgroundColor: activeLink === 'settings' ? 'rgb(243 244 246)' : '', color: activeLink === 'settings' ? 'rgb(55 65 81)' : '' }}

                                    >
                                        Settings
                                    </Link>
                                </li>

                                {/* <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Security
                                    </Link>
                                </li> */}

                                <li>
                                    <form action="#">
                                        <button
                                            type="submit"
                                            className="w-full rounded-lg px-4 py-2 text-sm font-medium text-red-500 [text-align:_inherit] hover:bg-gray-100 "
                                            
                                        >
                                            Logout
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <Link to="#" className="flex items-center gap-2 p-4 bg-white hover:bg-gray-50">
                    <img
                        alt=""
                        src={dp}
                        className="object-cover rounded-full size-10"
                    />

                    <div>
                        <p className="text-xs">
                            <strong className="block text-base font-medium text-gray-500 hover:text-gray-700 " >Profile</strong>
                            {/* <span className='ml-2 font-medium align-middle'> Profile</span> */}


                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default sidebar