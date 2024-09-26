import { ThreeDCardDemo } from '@/components/ThreeDCardDemo'
import React from 'react'

function Publications() {
  return (
    <div className='bg-transparent max-w-full min-h-screen rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-10 mt-24 dark:text-white'>
        
        <span className='text-7xl font-bold'>OUR <span className='text-yellow-500'>PUBLICATIONS</span></span>
        <ThreeDCardDemo/>
        
        </div>
  )
}

export default Publications