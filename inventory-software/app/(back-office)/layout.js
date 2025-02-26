import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <div className="flex">
          <Sidebar/>
          <main className='w-full bg-slate-100 min-h-screen ml-30'>
            <Header/>
            {children}
          </main>  
        </div>
    </div>
  )
}
