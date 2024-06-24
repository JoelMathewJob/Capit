import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Googleplay from '../assets/googleplay.png'
import Microsoft from '../assets/getmicro.png'
import axios from 'axios'

function signup() {
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/signup', {username,fullname,email,password})
        .then(result=>{
            console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))

    }


    return (
        <div className='flex items-center justify-center h-screen '>
            <div className='flex flex-col gap-3 pt-16 m-3 text-center w-80' >


                <form className="flex flex-col gap-2 p-3 border border-gray-300 border-solid rounded-lg " onSubmit={handleSubmit} method='post'>

                    <span className='text-5xl m-8 font-[poppins] font-medium'>Capit.</span>


                    <input type='text' name='Full Name' placeholder='Full Name' className='p-2 text-xs placeholder-gray-500 border-2 border-solid mx-7 ' style={{ backgroundColor: '#fafafa' }} onChange={e=>setFullname(e.target.value)} required />
                    
                    <input type='text' name='Username' placeholder='Username' className='p-2 text-xs placeholder-gray-500 border-2 border-solid mx-7 ' style={{ backgroundColor: '#fafafa' }} onChange={e=>setUsername(e.target.value)} required />
                    
                    <input type='text' name='Email/Phone' placeholder='Mobile No. or Email' className='p-2 text-xs placeholder-gray-500 border-2 border-solid mx-7 ' style={{ backgroundColor: '#fafafa' }} onChange={e=>setEmail(e.target.value)}  required />
                    
                    <input type='password' name='Password'
                        placeholder='Password' className='p-2 text-xs placeholder-gray-500 border-2 border-solid mx-7' style={{ backgroundColor: '#fafafa' }} onChange={e=>setPassword(e.target.value)}  required />
                    {/* <input type='password' placeholder='Confirm Password' className='p-2 text-xs placeholder-gray-500 border-2 border-solid mx-7' style={{ backgroundColor: '#fafafa' }} required/> */}
                    <button className='py-1 my-2 text-sm font-bold text-white rounded-lg mx-7' style={{ backgroundColor: '#4cb5f9' }} type='submit'>Sign Up</button>


                    <hr className='mx-8 mt-4' />
                    <span className='mt-5 text-xs text-gray-500'>People who use our service may have uploaded your contact information to Instagram. Learn More</span>
                    <span className='m-3 text-xs text-gray-500'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>


                </form>

                <div className="p-5 border border-gray-300 border-solid rounded-lg " >
                    <span className='text-sm'>Have an account? <a href="/login" className='font-medium' style={{ color: '#00a2f8' }}>Log In</a></span>

                </div>

                <div >
                    <span className='text-sm'>Get the app.</span>
                    <div className='flex justify-center gap-2 my-3'>
                        <img src={Googleplay} alt='Google Play' className="h-10" />
                        <img src={Microsoft} alt='Microsoft' className="h-10" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default signup