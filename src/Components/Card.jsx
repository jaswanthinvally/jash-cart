import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className=' bg-blue-600 cards h-[300px] w-[300px] hover:z-100 hover:shadow-lx mt-3 ms-3 rounded-lg mx-5   '>
            <div className='h-2/3'>
    
            </div>
            <div className='h-1/3 bg-orange-600 rounded-lg'>
            <h1 className='ms-3 text-white font-semibold text-2xl'>{props.item}</h1>
            <h3 className='ms-3 text-white font-semibold'>{props.amount}</h3>
            <button className='btn bg-blue-600 h-[35px] w-[80px] text-white hover:bg-black font-bold text-md rounded ms-3 mt-1 '>
            Buy now
            </button>
    
            </div>
    
            </div>
        </div>
      )
}

export default Card