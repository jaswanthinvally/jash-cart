import React, { useState } from 'react'

const Login = (isopen, setisopen) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [logintype, setLogintype] = useState(true)
    return isopen ? (
        <div className='overlay'>
            <div className='left-container flex flex-col w-1/4'>
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
            </div>
            <div className='flex flex-col text-center w-1/4 '>
                <p className='text-blue-600 font-semibold'>you accept <span className='text-orange-600'>jash</span>cart</p>
                <p className='text-blue-600 font-semibold'>terms and condition</p>
                <p className='text-blue-600 font-semibold'>privacy policy</p>
                <div>
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
    ) : (
        <>

        </>
    )
}

export default Login