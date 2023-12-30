import React, { useState } from 'react'
import '../assets/images/Shopping.svg'

const Login = (isopen, setisopen) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [logintype, setLogintype] = useState(true)
    return isopen ? (
        <div className='overlay flex flex-row justify-center items-center   '>
            <div className='main-container w-1/2 h-[300px] flex flex-row justify-center shadow-md shadow-black mt-14 '>
                <div className=' right-container w-1/2 bg-blue-600 flex items-center justify-center'>
                    <h1 className='text-center font-extrabold text-lg text-white '>welcome to <span className='text-orange-600'> jash </span>cart</h1>
                </div>

                <div className='left-container flex flex-col w-1/2 items-center justify-center'>
                <div className='login-signup-heading'>
                    {
                        logintype ? (
                            <h1 className='text-md font-extrabold text-lg mb-3'>login</h1>
                        ) :
                        (
                            <h1>signup</h1>
                        )
                    }
                </div>
                    <label>email</label>
                    <input
                        className='border-solid  border-2 border-black ms-2 '
                        placeholder='email'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <label>password</label>
                    <input
                        className='border-solid  border-2 border-black ms-2 '
                        placeholder='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='flex flex-col justify-center items-center '>
                        <p className='text-blue-600 font-semibold mt-2'>you accept <span className='text-orange-600'>jash</span>cart</p>
                        <div className='login-signup-btn mt-2'>
                            {
                                isopen ? (
                                    <button className='bg-blue-600 p-1 rounded w-[60px] text-white'>login</button>
                                ) : (
                                    <button>signup</button>
                                )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <>

        </>
    )
}

export default Login