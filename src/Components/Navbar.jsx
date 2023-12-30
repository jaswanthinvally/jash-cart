import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {IoSearch, IoCart} from 'react-icons/io5'


const Navbar = () => {
  const [isopen, setisopen] = useState(false)
  return (
    <div className='main min-w-full '>
          <div className='nav-container bg-blue-700 min-w-full '>
      <div className='container flex flex-row justify-between items-center w-5/6' >
      <Link to={"/"} className='font-bold text-2xl text-white ms-5 '><span className='text-orange-600 font-bold'>Jash </span>cart</Link>
      <div className=' '>
        <input placeholder='serarch for products brand etc ' className='h-[30px] w-[300px] rounded-lg'/>
      <button className='button ms-3'>
      <IoSearch/>
      </button>
      </div>
      <div>
      <Link to={"/login"}>
      <button className='btn bg-orange-600 h-[30px] w-[70px] m-3 text-white font-bold rounded'>
          login
        </button>
      </Link>
      </div>
      <div className='flex justify-center align-middle'>
      <h3 className='text-white font-bold p-1 '>become a seller</h3>
      </div>
      <div>
        <h1 className='text-white font-bold'>more</h1>
      </div>
      <div className='cart-btn flex flex-row justify-center '>
      <Link to={"/cart"} className='flex flex-row align-center justify-center '>
        <h3 className='mr-1.5 font-bold text-white'>cart</h3>
      </Link> 
      <Link to={"/cart"} className='mt-1.5'><IoCart/></Link>
      </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar