import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MovieIcon from '@mui/icons-material/Movie';

function sidebar({username, dp}) {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white ">
            <div className="px-10 py-6">
                <span className="grid h-16 w-36 place-content-center rounded-lg bg-gray-100 text-3xl font-[poppins] font-medium">
                    Capit.
                </span>

                <ul className="my-6 space-y-1 leading-9">
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg bg-gray-100 px-4 py-2  font-medium text-gray-700 align-middle"
                        ><HomeIcon/>
                          <span className='align-middle ml-2'> Home</span> 
                        </a>
                    </li>

                    {/* <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className=" font-medium"> Teams </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
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

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Banned Users
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Calendar
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li> */}

                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2  font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        ><SearchIcon/>
                            <span className='align-middle ml-2'> Search</span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        ><ExploreIcon/>
                            <span className='align-middle ml-2'> Explore</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        ><MovieIcon/>
                            <span className='align-middle ml-2'> Reels</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        ><ForumIcon/>
                            <span className='align-middle ml-2'> Messages</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        ><NotificationsNoneIcon/>
                            <span className='align-middle ml-2'> Notifications</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        ><AddCircleOutlineIcon/>
                            <span className='align-middle ml-2'> Create</span>
                        </a>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className=" font-medium"> Account </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
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

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Settings
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Security
                                    </a>
                                </li>

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
                <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src={dp}
                        className="size-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium text-base hover:text-gray-700 text-gray-500 " >Profile</strong>
                            {/* <span className='align-middle ml-2 font-medium'> Profile</span> */}

                            
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default sidebar