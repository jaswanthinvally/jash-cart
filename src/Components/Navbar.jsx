import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {IoSearch, IoCart} from 'react-icons/io5'
import Login from './Login'

const Navbar = () => {
  const [isopen, setisopen] = useState(false)
  return (
    <div className='main'>
          <div className='nav-container bg-blue-700 '>
      <div className='container flex flex-row justify-between'>
      <Link to={"/"} className='font-bold text-xl text-white '><span className='text-orange-600 font-bold'>Jash </span>cart</Link>
      <div className=' '>
        <input placeholder='serarch for products brand  '/>
        <button className='button'>
      <IoSearch/>
      </button>
      </div>
      <div>
        <button className='btn bg-orange-600'>
          login
        </button>
      </div>
      <div className='flex justify-center align-middle'>
      <h3 className='text-orange-600 font-bold p-1 '>become a seller</h3>
      </div>
      <div>
        <h1 className='text-white font-bold'>more</h1>
      </div>
      {/*<Link to={"/cart"} className='flex flex-row align-center justify-center '>
        <h3>cart</h3>
      </Link>  */}
      <Link to={"/cart"} className='mt-1.5'><IoCart/></Link>

      </div>
    </div>
    <div>
      <Login/>
    </div>
    </div>
  )
}

export default Navbar