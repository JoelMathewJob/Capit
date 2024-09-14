// import React, { useState } from 'react';
// import pic from '../assets/login.png';

// function Settings() {
//   const [status, setStatus] = useState('active');
//   const [fullName, setFullName] = useState('John Doe');
//   const [username, setUsername] = useState('johndoe');
//   const [dateOfBirth, setDateOfBirth] = useState('2000-01-01');

//   const [editFullName, setEditFullName] = useState(false);
//   const [editUsername, setEditUsername] = useState(false);
//   const [editBio, setEditBio] = useState(false);
//   const [bio, setBio] = useState('This is the bio section where the user can describe themselves.');

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'active':
//         return 'bg-green-300';
//       case 'busy':
//         return 'bg-yellow-300';
//       case 'off':
//         return 'bg-gray-300';
//       default:
//         return '';
//     }
//   };

//   const handleSave = () => {
//     // Here you can perform actions like saving to a backend or updating state
//     console.log('Saving changes...');
//     console.log('Full Name:', fullName);
//     console.log('Username:', username);
//     console.log('Date of Birth:', dateOfBirth);
//     console.log('Status:', status);
//     console.log('Bio:', bio);
//   };

//   const handleEditFullName = () => {
//     setEditFullName(true);
//   };

//   const handleEditUsername = () => {
//     setEditUsername(true);
//   };

//   const handleEditBio = () => {
//     setEditBio(true);
//   };

//   return (
//     <div className='flex flex-col items-center w-full min-h-screen bg-gray-100'>
//       <div className='flex flex-col items-center w-full max-w-4xl p-5 mt-5 bg-white rounded-lg shadow-md'>
//         <div className='relative w-40 h-40 mb-4'>
//           <img
//             src={pic}
//             alt='Profile Pic'
//             className='w-full h-full transition-all duration-300 ease-in-out rounded-full filter hover:grayscale'
//           />
//           <div className='absolute inset-0 flex items-center justify-center text-lg font-bold text-white transition-opacity duration-300 ease-in-out rounded-full opacity-0 hover:opacity-100 hover:bg-slate-300'>
//             Edit
//           </div>
//           <div className={`absolute bottom-0 right-0 w-6 h-6 rounded-full ${getStatusColor(status)}`}></div>
//         </div>
//         <div className='text-center'>
//           <h1 className='text-2xl font-semibold' onClick={handleEditUsername} style={{ cursor: 'pointer' }}>
//             {editUsername ? (
//               <input
//                 type='text'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 onBlur={() => setEditUsername(false)}
//                 autoFocus
//               />
//             ) : (
//               username
//             )}
//           </h1>
//           <p className='text-gray-600' onClick={handleEditFullName} style={{ cursor: 'pointer' }}>
//             {editFullName ? (
//               <input
//                 type='text'
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 onBlur={() => setEditFullName(false)}
//                 autoFocus
//               />
//             ) : (
//               fullName
//             )}
//           </p>
//           <div className='m-5' onClick={() => setEditBio(true)} style={{ cursor: 'pointer' }}>
//             {editBio ? (
//               <textarea
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//                 onBlur={() => setEditBio(false)}
//                 autoFocus
//                 rows='3'
//                 className='w-full max-w-lg p-2 mb-2 border rounded-md'
//                 style={{ maxWidth: '100%' }} // Set max-width to prevent excessive stretching
//               />
//             ) : (
//               <p className='whitespace-pre-line'>{bio}</p>
//             )}
//           </div>
//         </div>
//         <div className='flex justify-around w-full mt-4'>
//           <div className='flex flex-col items-center'>
//             <span className='text-lg font-semibold'>10</span>
//             <span className='text-gray-600'>Posts</span>
//           </div>
//           <div className='flex flex-col items-center'>
//             <span className='text-lg font-semibold'>100</span>
//             <span className='text-gray-600'>Followers</span>
//           </div>
//           <div className='flex flex-col items-center'>
//             <span className='text-lg font-semibold'>150</span>
//             <span className='text-gray-600'>Following</span>
//           </div>
//         </div>
//         <div className='flex flex-col w-full mt-4'>
//           <input
//             type='date'
//             placeholder='Date Of Birth'
//             className='p-2 mb-2 border rounded-md'
//             value={dateOfBirth}
//             onChange={(e) => setDateOfBirth(e.target.value)}
//           />
//           <select
//             className='p-2 mb-2 border rounded-md'
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value='active'>Active</option>
//             <option value='busy'>Busy</option>
//             <option value='off'>Off</option>
//           </select>
//         </div>
//         <div className='flex justify-center w-full mt-4'>
//           <button
//             className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
//             onClick={handleSave}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//       <div className='flex flex-wrap justify-center w-full max-w-4xl mt-5'>
//         {/* Placeholder for user's posts */}
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         <div className='w-1/3 p-2'>
//           <div className='w-full h-40 bg-gray-300'></div>
//         </div>
//         {/* Repeat above divs for more posts */}
//       </div>
//     </div>
//   );
// }

// export default Settings;


export default function SettingsPage() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="m-5 text-2xl font-bold font-[poppins] text-center lg:text-left px-4">Settings</h1>
      <div className="space-y-4">
        {['Account', 'Privacy', 'Security', 'Notifications', 'Help'].map((setting) => (
          <div key={setting} className="p-4 rounded-lg shadow bg-card text-card-foreground">
            <h2 className="text-lg font-semibold">{setting}</h2>
            <p className="text-sm text-muted-foreground">Manage your {setting.toLowerCase()} settings</p>
          </div>
        ))}
      </div>
    </div>
  )
}