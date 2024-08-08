
import React from 'react'

export default function SubscriptionCard() {
  return (
<div className="pt-16 flex flex-col p-2">
    <div className=' bg-slate-900 rounded-lg'>
        <div className='px-2 py-1'>
            <p className='text-[0.77rem] border-l-2 border-orange-400 px-2 py-1'>
            Enterprise Innovation Powered By {" "}
            <span className="text-orange-500">Knowledge</span>.
            </p>
        </div>
        <hr className='border-b-2 border-gray-600'/>
        
            <div className='flex'>
                <span className='border-r-2 text-sm px-4 py-1 border-gray-600'>Intranet</span>
            <div>
                
            </div>
                <span className='text-sm px-4 py-1'>GreyHR</span>
            </div>
            
        
    </div>
</div>
  )
}
