import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Leftimg from '../assets/login.png'
import Googleplay from '../assets/googleplay.png'
import Microsoft from '../assets/getmicro.png'

function login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:3000/login', { username, password })
            .then(result => {
                console.log(result);

                if (result.data === "Success") {
                    navigate('/home');
                    
                }
                else alert(result.data)
            })
            .catch(err=>console.log(err))
    }


    return (
        <div className='flex items-center justify-center w-full h-screen p-4'>

            <div className="w-1/3 mt-3 mr-3 bg-center bg-no-repeat bg-contain sm:hidden lg:block h-2/3" style={{ backgroundImage: `url(${Leftimg})` }} />



            <div className='flex flex-col gap-3 m-3 text-center lg:w-1/4 sm:w-80'>


                <form className="flex flex-col gap-2 p-3 border border-gray-300 border-solid rounded-lg " onSubmit={handleSubmit}>

                    <span className='text-5xl m-8 font-[poppins] font-medium'>Capit.</span>


                    <input type='text' placeholder='Phone number, username or email' name='Username' className='p-2 text-xs placeholder-gray-500 border-2 border-solid mx-7 ' style={{ backgroundColor: '#fafafa' }} onChange={e=>setUsername(e.target.value)} required />
                    <input type='password' placeholder='Password' className='p-2 text-xs placeholder-gray-500 border-2 border-solid mx-7' style={{ backgroundColor: '#fafafa' }} onChange={e=>setPassword(e.target.value)}  required />

                    <button className='py-1 my-2 text-sm font-bold text-white rounded-lg mx-7' style={{ backgroundColor: '#4cb5f9' }} type='submit'>Log In</button>


                    <hr className='mx-8 mt-4' />
                    <span className='mt-5 text-sm'>Log in with Facebook</span>
                    <span className='m-3 text-xs'>Forgot Password ?</span>


                </form>

                <div className="p-5 border border-gray-300 border-solid rounded-lg " >
                    <span className='text-sm'>Don't have an account? <a href="/signup" className='font-medium' style={{ color: '#00a2f8' }}>Sign up</a></span>

                </div>

                <div >
                    <span className='text-sm'>Get the app.</span>
                    <div className='flex justify-center gap-2 my-3'>
                        <img src={Googleplay} alt='Google Play' className="h-10" />
                        <img src={Microsoft} alt='Google Play' className="h-10" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default login