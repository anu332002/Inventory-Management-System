import Link from 'next/link'
import React from 'react'

export default function SalesActivityCard({items}) {
  return (
    <Link href={items.href} className="flex flex-col items-center rounded-lg border border-slate-300 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer gap-3 transition-all duration-300">
          <h4 className={`font-bold text-4xl ${items.color}`}>{items.num}</h4>
          <small className='text-slate-600'>{items.unit}</small>
          <div className="flex items-center space-x-2 text-slate-600">
            <items.icon className='w-4 h-4'/>
            <span className='uppercase text-sm whitespace-nowrap'>{items.title}</span>
          </div>
        </Link>
  )
}
