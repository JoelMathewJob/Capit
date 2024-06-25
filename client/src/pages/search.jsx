import React from 'react';

function Search() {
    return (
        <div className='relative h-screen p-5 bg-gray-200 border-gray-300 border-solid border-e lg:left-0 lg:w-full'>
            <h1 className='m-5 text-2xl text-left font-bold font-[poppins]'>Search</h1>
            <div className="flex items-center justify-center">
                <div className='relative w-full max-w-md'>
                    <input
                        type='text'
                        placeholder='Search..'
                        className='w-full p-2 pl-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button className='absolute transform -translate-y-1/2 right-3 top-1/2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-500"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;
