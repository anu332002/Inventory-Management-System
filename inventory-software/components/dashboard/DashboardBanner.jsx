"use client"
import { GlobeLock, X } from 'lucide-react'
import React, { useState } from 'react'

export default function DashboardBanner() {
  const [hidden,setHidden] = useState(false)
  return (
    <div className={hidden?"hidden":"grid grid-cols-12 mt-3 items-center relative p-2 ml-44 mr-44 border border-slate-400 rounded-xl mb-3 hover:border-gray-800 transition-all duration-300"}>
        {/* Icon */}
        <div className="col-span-3 px-14">
        <GlobeLock className='text-gray-500 w-20 h-20'/>
        </div>
        {/* content */}
        <div className='col-span-6'>
        <h2 className='font-extrabold text-xl'>Start accepting online payments</h2>
        <p>Businesses are moving towards online payments as they're easy, secure and fast. Try them for your business today</p>
        </div>
        {/* Enable button */}
        <div className="col-span-3 px-14">
        <button className='w-20 h-10 uppercase bg-blue-600 rounded-3xl text-white'>Enable</button>
        </div>
        {/* close button */}
        <button onClick={()=>setHidden(true)} className="absolute top-0 right-0">
          <X/>
        </button>
    </div>
  )
}
