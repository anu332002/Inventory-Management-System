import { CheckCircle2, CircleEllipsis, Package2, ReceiptIndianRupee } from 'lucide-react'
import React from 'react'
import SalesActivityCard from './SalesActivityCard'
import InventorySummaryCard from './InventorySummaryCard'

export default function SalesInv() {
  const salesActivity=[
    {
      num:10,
      color:"text-blue-500",
      unit:"Qty",
      icon:CheckCircle2,
      title:"to be packed",
      href:"#"
    },
    {
      num:4,
      color:"text-red-500",
      unit:"Pkgs",
      icon:Package2,
      title:"to be shipped",
      href:"#"
    },
    {
      num:2,
      color:"text-green-500",
      unit:"Pkgs",
      icon:CircleEllipsis,
      title:"to be delivered",
      href:"#"
    },
    {
      num:6,
      color:"text-yellow-500",
      unit:"Qty",
      icon:ReceiptIndianRupee,
      title:"to be invoiced",
      href:"#"
    },
  ]
  const inventorySummary=[
    {
      title: "Quantity in hand",
      num: 15
    },
    {
      title: "Quantity to be received",
      num: 10
    }
  ]
  return (
<div className= "px-3 py-4 bg-blue-100 border-b border-slate-300 grid grid-cols-12 gap-24">
    {/* SALES ACTIVITY */}
    <div className='col-span-8'>
      <h2 className="text-xl">Sales Activity</h2>
      <div className="grid grid-cols-4 mt-4 gap-3">
        {/* card */}
        {
          salesActivity.map((items,i)=>{
            return <SalesActivityCard items={items} key={i}/>;
            
          })
        }
      </div>
    </div>
    {/* INVENTORY SUMMARY */}
    <div className="col-span-4">
      <h2 className="text-xl">Inventory Summary</h2>
      <div className='py-1'>
        {
          inventorySummary.map((items,i)=>{
              return <InventorySummaryCard items={items} key={i}/>;    
          })
        }
      </div>
    </div>
</div>
  )
} 
