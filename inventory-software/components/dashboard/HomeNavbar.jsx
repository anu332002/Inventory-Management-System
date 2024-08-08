"use client";
import { Building2, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HomeNavbar() {
  const pathname = usePathname()
  console.log(pathname)
  const navLinks = [
      {
        title:"Dashboard",
        href:"/dashboard/home/overview"
      },
      {
        title:"Getting Started",
        href:"/dashboard/home/getting_started"
      },
      {
        title:"Recent Updates",
        href:"/dashboard/home/updates"
      },
      {
        title:"Announcement",
        href:"/dashboard/home/announcement"
      }
  ]
  return (
    <div className="h-32 p-2 header-bg border-b border-black">
        <div className='flex items-center space-x-3 px-20 py-5'>
            <div className="flex absolute top-3 right-0 mt-10 mr-10 gap-2">
                <p className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg'>WELCOME ANUSHKA SINHA</p>
                
            </div>
        </div>
        <nav className='mt-14 pl-36 flex space-x-28 text-white ml-4'>
          {
            navLinks.map((item,i)=>{
              return(
                <Link 
                key={i} 
                href={item.href}
                className={pathname===item.href?"border-b-4 border-yellow-400 rounded-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]":""}>
                {item.title}
                </Link>)})
          }
        </nav>
    </div>
  )
}
