import React, { useState } from 'react'
import Leftimg from '../assets/login.png'
import Googleplay from '../assets/googleplay.png'
import Microsoft from '../assets/getmicro.png'

function login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div className='flex w-full h-screen justify-center items-center p-4'>

            <div className=" sm:hidden lg:block mt-3 mr-3 w-1/3 bg-contain bg-center bg-no-repeat h-2/3  " style={{backgroundImage:`url(${Leftimg})`}}/>
                
            

            <div className='m-3 lg:w-1/4 sm:w-80 gap-3 flex flex-col text-center'>


                <form className=" border-solid border border-gray-300 flex flex-col p-3 gap-2 rounded-lg " >

                    <span className='text-5xl m-8 font-[poppins] font-medium'>Capit.</span>


                    <input type='text' placeholder='Phone number, username or email' className='mx-7 text-xs border-solid border-2 p-2 placeholder-gray-500 ' style={{backgroundColor:'#fafafa'}} required/>
                    <input type='password' placeholder='Password' className='mx-7 text-xs border-solid border-2 p-2 placeholder-gray-500' style={{backgroundColor:'#fafafa'}} required/>


                    <hr className='mt-4 mx-8' />
                    <span className='mt-5 text-sm'>Log in with Facebook</span>
                    <span className='m-3 text-xs'>Forgot Password ?</span>


                </form>

                <div className=" border-solid border border-gray-300  p-5 rounded-lg " >
                    <span className='text-sm'>Don't have an account? <a href="#" className='font-medium' style={{color:'#00a2f8'}}>Sign up</a></span>

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

export default login