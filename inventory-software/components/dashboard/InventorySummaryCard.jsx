import React from 'react'

export default function InventorySummaryCard({items}) {
  return (
    <div  className="flex items-center rounded-lg border border-slate-300 hover:border-blue-400 bg-white px-4 py-2 cursor-pointer gap-3 transition-all duration-300 mt-3 relative">
          <div className="flex items-center space-x-2 text-slate-600 gap-24">
            <span className='uppercase text-sm whitespace-nowrap'>{items.title}</span>
            <h4 className='font-semibold text-black text-2xl absolute right-5'>{items.num}</h4>
          </div>
        </div>
  )
}
