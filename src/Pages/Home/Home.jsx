import React from 'react'
import Card from '../../Components/Card'

const Home = () => {
  return (
    <div className='grid grid-cols-5'>
    <div className='grid col-span-1'>
    </div>
    <div className='grid grid-rows-3 col-span-4  gap-3 gap-y-10 grid-flow-col '>
    <Card item="shirt" amount="300"/>
    <Card item="shirt" amount="300"/>
    <Card item="shirt" amount="300"/>
    <Card item="shirt" amount="300"/>
    <Card item="shirt" amount="300"/>
    <Card item="shirt" amount="300"/>
    <Card item="shirt" amount="300"/>
    <Card item="shirt" amount="300"/>
    <Card item="shirt" amount="300"/>
    </div>
    </div>
    
  )
}

export default Home