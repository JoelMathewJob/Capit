import React, { useState } from 'react';
import pic from '../assets/login.png';

function Profile() {
  const [status, setStatus] = useState('active');

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-300';
      case 'busy':
        return 'bg-yellow-300';
      case 'off':
        return 'bg-gray-300';
      default:
        return '';
    }
  };

  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-gray-100'>
      <div className='flex flex-col items-center w-full max-w-4xl p-5 mt-5 bg-white rounded-lg shadow-md'>
        <div className='relative w-40 h-40 mb-4'>
          <img
            src={pic}
            alt='Profile Pic'
            className='w-full h-full transition-all duration-300 ease-in-out rounded-full filter hover:grayscale'
          />
          <div className='absolute inset-0 flex items-center justify-center text-lg font-bold text-white transition-opacity duration-300 ease-in-out rounded-full opacity-0 hover:opacity-100 hover:bg-slate-300'>
            Edit
          </div>
          <div className={`absolute bottom-0 right-0 w-6 h-6 rounded-full ${getStatusColor(status)}`}></div>
        </div>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold'>Username</h1>
          <p className='text-gray-600'>Full Name</p>
          <p className='mt-2'>This is the bio section where the user can describe themselves.</p>
        </div>
        <div className='flex justify-around w-full mt-4'>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-semibold'>10</span>
            <span className='text-gray-600'>Posts</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-semibold'>100</span>
            <span className='text-gray-600'>Followers</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-semibold'>150</span>
            <span className='text-gray-600'>Following</span>
          </div>
        </div>
        <div className='flex flex-col w-full mt-4'>
          <input type='text' placeholder='Full Name' className='p-2 mb-2 border rounded-md'/>
          <input type='text' placeholder='Username' className='p-2 mb-2 border rounded-md'/>
          <input type='date' placeholder='Date Of Birth' className='p-2 mb-2 border rounded-md'/>
          <select
            className='p-2 mb-2 border rounded-md'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="busy">Busy</option>
            <option value="off">Off</option>
          </select>
        </div>
      </div>
      <div className='flex flex-wrap justify-center w-full max-w-4xl mt-5'>
        {/* Placeholder for user's posts */}
        <div className='w-1/3 p-2'>
          <div className='w-full h-40 bg-gray-300'></div>
        </div>
        <div className='w-1/3 p-2'>
          <div className='w-full h-40 bg-gray-300'></div>
        </div>
        <div className='w-1/3 p-2'>
          <div className='w-full h-40 bg-gray-300'></div>
        </div>
        {/* Repeat above divs for more posts */}
      </div>
    </div>
  );
}

export default Profile;
