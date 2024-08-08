import { Bell, ChevronDown, Grip, History, LogOut, Plus, Settings, Users } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-gray-200 h-10 flex items-center justify-between px-5'>
        <div className="flex items-center space-x-2">
            {/* Recent activities */}
            <button>
                <History className='w-6 h-6 '/>
            </button>
            {/* Search */}
            <SearchInput/>
        </div>
        <div className="flex items-center gap-3">
            {/* plus icon */}
            <div className="pr-2 border-r border-gray-300">
            <button className='p-1 bg-blue-500 rounded-lg'>
                <Plus className='text-slate-50 w-4 h-4'/>
            </button>
            </div>
            {/* users */}
            <div className="flex pl-1 border-gray-300">
            <button className='p-1 hover:bg-slate-200 rounded-lg'>
                <Users className='text-slate-900 w-4 h-4'/>
            </button>
            </div>
            {/* notification */}
            <div className="flex pl-1 border-gray-300">
            <button className='p-1 hover:bg-slate-200 rounded-lg'>
                <Bell className='text-slate-900 w-4 h-4'/>
            </button>
            </div>
            {/* settings */}
            <div className="flex pl-1 pr-2 border-r border-gray-300">
            <button className='p-1 hover:bg-slate-200 rounded-lg'>
                <Settings className='text-slate-900 w-4 h-4'/>
            </button>
            </div>
            <div className="flex gap-2 pl-1 sp">
            {/* GyanSys Chevron */}
            <button className='flex items-center'>
                <span>
                 GyanSys
                </span>
                <ChevronDown className='w-4 h-4'/> 
            </button>
            {/* user icon */}
            <button>
                <Image
                    src="/user.png"
                    alt="user image"
                    width={255}
                    height={255}
                    className="w-9 h-9 rounded-full border-slate-950"
                />
            </button>
            <button className='text-red-600 font-semibold text-sm flex gap-1 items-center'>Log out<LogOut className='w-4 h-4' /></button>
            {/* grid icon */}
            <button>
                <Grip className='w-6 h-6 text-slate-900'/>
            </button>
            
        </div>
    </div>
        
</div>
  )
}
