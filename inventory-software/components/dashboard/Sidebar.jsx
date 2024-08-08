"use client"
import { BaggageClaim, ChevronLeft, FileChartLine, FolderOpen, Home, ShoppingBasket, ShoppingCart, Ticket } from 'lucide-react'
import Link from 'next/link'
import SubscriptionCard from './SubscriptionCard'

export default function Sidebar() {
  return (
            <div className="w-56 min-h-screen bg-slate-800 text-slate-50">
               {/* Top Part */}
               <div className="flex flex-col">
                    {/* Logo */}
                    <Link href="#" className="flex space-x-2 items-center bg-slate-900 p-2">
                        <BaggageClaim/>
                        <span className='font-semibold text-lg'>Inventory</span>
                    </Link>
                    {/* Links */}
                    <nav className='flex flex-col gap-4 px-1 py-4'>
                        <Link href="/dashboard/home/getting_started" className='flex items-center space-x-2 p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500'>
                            <Home className='w-4'/>
                            <span>
                                Home
                            </span>
                        </Link>
                        <button  className='flex items-center space-x-2 p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500'>
                            <BaggageClaim className='w-4'/>
                            <span>
                                Inventory
                            </span>
                        </button>
                        <button  className='flex items-center space-x-2 p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500'>
                            <ShoppingCart className='w-4'/>
                            <span>
                                Sales
                            </span>
                        </button>
                        <button  className='flex items-center space-x-2 p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500'>
                            <ShoppingBasket className='w-4'/>
                            <span>
                                Purchases
                            </span>
                        </button>
                        <Link href="/dashboard/requests" className='flex items-center space-x-2 p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500'>
                            <Ticket className='w-4'/>
                            <span>
                                Requests
                            </span>
                        </Link>
                        <Link href="/dashboard/reports" className='flex items-center space-x-2 p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500'>
                            <FileChartLine className='w-4'/>
                            <span>
                                Reports
                            </span>
                        </Link>
                        <Link href="/dashboard/documents" className='flex items-center space-x-2 p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-500'>
                            <FolderOpen className='w-4'/>
                            <span>
                                Documents
                            </span>
                        </Link>
                    </nav>
               </div>
               {/* Bottom Partg */}
               
               {/* Subscription Card */}
               <SubscriptionCard/>
               {/* Footer Icon */}
                <button className="flex space-x-2 bg-slate-900 p-[0.4rem] justify-center w-full mt-2">
                    <ChevronLeft/>
                </button>
            
            </div>
            
  )
}
