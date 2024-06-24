import React from 'react'
import Googleplay from '../assets/googleplay.png'
import Microsoft from '../assets/getmicro.png'


function signup() {
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className='m-3 w-80 gap-3 flex flex-col text-center pt-16' >


                <form className=" border-solid border border-gray-300 flex flex-col p-3 gap-2 rounded-lg " >

                    <span className='text-5xl m-8 font-[poppins] font-medium'>Capit.</span>


                    <input type='text' placeholder='Full Name' className='mx-7 text-xs border-solid border-2 p-2 placeholder-gray-500 ' style={{ backgroundColor: '#fafafa' }} required />
                    <input type='text' placeholder='Username' className='mx-7 text-xs border-solid border-2 p-2 placeholder-gray-500 ' style={{ backgroundColor: '#fafafa' }} required/>
                    <input type='text' placeholder='Mobile No. or Email' className='mx-7 text-xs border-solid border-2 p-2 placeholder-gray-500 ' style={{ backgroundColor: '#fafafa' }} required />
                    <input type='password' placeholder='Password' className='mx-7 text-xs border-solid border-2 p-2 placeholder-gray-500' style={{ backgroundColor: '#fafafa' }} required/>
                    <input type='password' placeholder='Confirm Password' className='mx-7 text-xs border-solid border-2 p-2 placeholder-gray-500' style={{ backgroundColor: '#fafafa' }} required/>
                    <button className=' text-white rounded-lg mx-7 py-1 text-sm font-bold my-2' style={{ backgroundColor: '#4cb5f9' }}>Sign Up</button>


                    <hr className='mt-4 mx-8' />
                    <span className='mt-5 text-xs text-gray-500'>People who use our service may have uploaded your contact information to Instagram. Learn More</span>
                    <span className='m-3 text-xs text-gray-500'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>


                </form>

                <div className=" border-solid border border-gray-300  p-5 rounded-lg " >
                    <span className='text-sm'>Have an account? <a href="#" className='font-medium' style={{ color: '#00a2f8' }}>Log In</a></span>

                </div>

                <div >
                    <span className='text-sm'>Get the app.</span>
                    <div className='flex justify-center my-3 gap-2'>
                        <img src={Googleplay} alt='Google Play' className="h-10" />
                        <img src={Microsoft} alt='Google Play' className="h-10" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default signup